const emailToMe = (message, name, email) => {

    return (
        `
        <html>  
            <div style="text-align: center; max-width: 50vw; background-color: #bfbdbb; padding: 10; font-family: Arial, Helvetica, sans-serif;">
                <div style="padding-top: 25; padding-bottom: 25; padding-left: 10%; padding-right: 10%; margin-bottom: 15; color: white; background-color: #009903; color: #00008b; border-radius: 5px; font-size: 24px">cameronburnsdev.com</div>
                <div style="font-size: 36px; margin-bottom: 10;">Nice, you received a message from <u>${name}</u>:</div>
                <div style="color: #0f0f0f; font-size: 30px;">${message}</div>
                <span style="color: #0f0f0f; font-size: 18px;">They left you this email address: ${email}</span>
            </div>
        </html>
        `
    );
};

module.exports = emailToMe;