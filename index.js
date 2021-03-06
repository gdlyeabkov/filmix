const nodemailer = require("nodemailer")
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const shortid = require('shortid')

const app = express()
const bcrypt = require('bcrypt')
const node_media_server = require('./media_server')

app.use('/', serveStatic(path.join(__dirname, '/dist')))

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gdlyeabkov@gmail.com',
        pass: 'myreversepassword'
    }
})
const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/subscribers?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const SubscriberSchema = new mongoose.Schema({
    email: String,
    password: String,
    balance: {
        type: Number,
        default: 0
    },
    streamKey: String
}, { collection : 'mysubscribers' });

const SubscriberModel = mongoose.model('SubscriberModel', SubscriberSchema);

app.get('/api/subscribers/create', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = SubscriberModel.find({})
    query.exec((err, allSubscribers) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        
        let subscriberExists = false

        if(allSubscribers.length >= 1) {
            allSubscribers.forEach(subscriber => {
                if(subscriber.email.includes(req.query.subscriberemail)){
                    subscriberExists = true
                }
            })
        }
        
        if(subscriberExists){
            return res.json({ "status": "Error" })
        } else {
            let encodedPassword = "#"
            let saltRounds = 10
            let salt = bcrypt.genSalt(saltRounds)
            let alphabet = "abcdefghjiklmnoprstuvwxyz"
            let generatedPassword = ''
            for(let i = 0; i < Math.floor(Math.random() * 10); i++){
                let randomIndex = Math.floor(Math.random() * alphabet.length)
                let randomLetter = alphabet[randomIndex]
                generatedPassword += randomLetter
            }
            encodedPassword = bcrypt.hashSync(generatedPassword, saltRounds)
            let newSubscriber = new SubscriberModel({ email: req.query.subscriberemail, password: encodedPassword, stream_key: shortid.generate() });
            newSubscriber.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                }
                let mailOptions = {
                    from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                    to: `${req.query.subscriberemail}`,
                    subject: `?????????????????????? ?? ?????????????????????????? ????????????????`,
                    html: `<h3>???????????? ???? ?????????????????? ????????????</h3><p>?????? ????????????: ${generatedPassword}</p>`,
                }
                transporter.sendMail(mailOptions, function (err, info) {
                    //?????????????? ???????????????????? ???????????????????? ?????? ????????????
                    let balanceTracker = setInterval(() => {
                        SubscriberModel.updateOne({ email: req.query.subscriberemail },
                            {
                                "$inc": { "balance": -99 }
                            }, (err, subscriber) => {
                                if(err){
                                    return res.json({ "status": "Error" })
                                } else {
                                    console.log('???????????? ??????????????')
                                    let query =  SubscriberModel.findOne({'email': req.query.subscriberemail}, async function(err, subscriber){
                                        if (err){
                                            console.log('???????????? ?????????????????? ???????????????????? ?????? ???????????????? ???? ?????????????? ??????????')
                                        } else {
                                            if(subscriber.balance < 0) {
                                                await SubscriberModel.deleteOne({ email: req.query.subscriberemail })
                                                clearInterval(balanceTracker)
                                            }        
                                        }
                                    })
                                }
                            })
                    
                    }, 25000)
                    return res.json({ status: 'OK' })
                })
            })
        }
    })

})

app.get('/api/subscribers/check', (req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryBefore = SubscriberModel.find({ email: { $in: req.query.subscriberemail }  })
    queryBefore.exec((err, allSubscribers) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        if(allSubscribers.length >= 1){
            let query =  SubscriberModel.findOne({'email': req.query.subscriberemail}, function(err, subscriber){
                if (err){
                    return res.json({ "status": "Error" })
                } else {
                    const passwordCheck = bcrypt.compareSync(req.query.subscriberpassword, subscriber.password) && req.query.subscriberpassword !== ''
                    if(subscriber != null && subscriber != undefined && passwordCheck){
                        return res.json({ "status": "OK", "employer": subscriber })
                    } else {
                        return res.json({ "status": "Error" })
                    }
                }
            })    
        } else if(allSubscribers.length <= 0){
            return res.json({ "status": "Error" })
        }
    })
})  
    
app.get('**', (req, res) => { 
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)
    
})
    
// const port = process.env.PORT || 8080
const port = 4000  
node_media_server.run();
app.listen(port)