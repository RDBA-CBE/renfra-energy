const nodemailer = require('nodemailer');

async function testEmail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'renfrawebsite@gmail.com',
      pass: 'yret dile jjkk kowo',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: 'repute.hariharan@gmailcom', // intentionally wrong to test
      to: 'renfrawebsite@gmail.com',
      subject: 'Test Email',
      html: '<p>Test</p>',
    });
    console.log('Success:', info);
  } catch (error) {
    console.error('Error with bad email:', error.message);
  }

  try {
    const info2 = await transporter.sendMail({
      from: 'repute.hariharan@gmail.com', // correct
      to: 'renfrawebsite@gmail.com',
      subject: 'Test Email',
      html: '<p>Test</p>',
    });
    console.log('Success 2:', info2);
  } catch (error) {
    console.error('Error 2:', error.message);
  }
}

testEmail();
