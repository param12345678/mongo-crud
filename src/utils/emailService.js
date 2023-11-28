import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    // Specify your email service and credentials
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
    },
});

// Function to send a password reset email
const sendPasswordResetEmail = async (user, resetLink) => {
    try {
        const templatePath = path.join(__dirname, '../helper/emailTemplates/resetPassword.ejs');
        const templateString = await ejs.renderFile(templatePath, { user, resetLink });

        // Email options
        const mailOptions = {
            from: 'your-email@gmail.com', // Sender's email address
            to: user.email, // Recipient's email address
            subject: 'Password Reset', // Email subject
            html: templateString, // HTML content of the email
        };

        // Send the email
        const { response } = await transporter.sendMail(mailOptions);

        console.log('Password reset email sent:', response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export { sendPasswordResetEmail };
