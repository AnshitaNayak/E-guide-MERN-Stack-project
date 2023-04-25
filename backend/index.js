require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongo = require('./mongo.js');
const User = require('./user.js');
const Review = require('./review.js');
const Appointment = require('./appointment.js');
let islogin = require('./checklogin.js');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));

setInterval(async () => {
    Appointment.find({}).then(reminderList => {
        reminderList.forEach(async (reminder) => {
            if (!reminder.isReminded) {
                const now = new Date();
                const hrs = now.getHours();
                const mins = now.getMinutes();
                const check = hrs * 60 + mins;

                const now1 = reminder.time;
                const timeArray = now1.split(':');
                const hrs2 = parseInt(timeArray[0]);
                const mins2 = parseInt(timeArray[1]);
                const check2 = hrs2 * 60 + mins2;

                const date1 = now.getDate();
                const month1 = now.getMonth() + 1;

                const now2 = reminder.date;
                const dateObj = new Date(now2);
                const date2 = dateObj.getDate();
                const month2 = dateObj.getMonth() + 1;

                if ((check2 - check < 0) && (date1 == date2) && (month1 == month2)) {
                    await Appointment.findByIdAndUpdate(reminder._id, { isReminded: true }).then(() => {
                        const accountSid = process.env.ACCOUNT_SID;
                        const authToken = process.env.AUTH_TOKEN;
                        const client = require('twilio')(accountSid, authToken);

                        client.messages
                            .create({
                                body: reminder.user,
                                from: 'whatsapp:+14155238886',
                                to: 'whatsapp:+916261917430'
                            })
                    }).catch(e => {
                        console.log(e)
                    })
                }
            }
        })
    }).catch(err => {
        console.log(err);
    })
}, 1000)


// app.get('/logout', async (req, res) => {
//     islogin = false;
//     res.render('home', { islogin });
// })

app.post('/api/register', async (req, res) => {
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            pass: req.body.pass
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate Email' });
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        pass: req.body.pass
    })
    if (user) {
        islogin = true;
        console.log("abcd ", islogin);
        res.locals.islogin = islogin;
        const token = jwt.sign({
            name: req.body.name,
            email: req.body.email
        }, 'secret123')
        return res.json({ status: 'ok', user: token })
    }
    else {
        return res.json({ status: 'error', user: false })
    }
})

app.post('/api/review', async (req, res) => {
    try {
        await Review.create({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            subject: req.body.subject
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate Number' })
    }
})

app.post('/api/appointments', async (req, res) => {
    try {
        const { date, time, user } = req.body;
        const newAppointment = new Appointment({
            date,
            time,
            user,
            isReminded: false
        });
        const savedAppointment = await newAppointment.save();
        res.json(savedAppointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.listen(8080, () => {
    console.log('SERVING MINOR PROJECT ON PORT NO. 8080');
})

mongo();