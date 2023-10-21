import type { NextApiRequest, NextApiResponse } from "next";
import formData from 'form-data';
import Mailgun from 'mailgun.js';

export default async function  handler(req:NextApiRequest, res: NextApiResponse){
    console.log('data', req.body)

    const {name, email,message } = req.body;
    const API_KEY = process.env.API_KEY || '';
    const DOMAIN = 'http://localhost:3000/';



const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});

const messageData = {
  from: 'Contact Form <contact@mg.ethanmick.com>',
  to: 'akramnabh@gmail.com',
  subject: 'Hello',
  text: `hello a message from ${name} ${email}
  ${message}
  `
};


    try {
        const emailRes = await client.messages.create(DOMAIN, messageData) 
        console.log(emailRes);
    } catch (err:any) {
        console.error("error sending the email", err);
    }
  
 



    res.status(200).json({submitted: true});
}