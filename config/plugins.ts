export default ({env}) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.ionos.co.uk'),
                port: env('SMTP_PORT', '587'),
                secure: false,
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
            },
            settings: {
                defaultFrom: 'mark@mrdevelop.co.uk',
                defaultReplyTo: 'noreply@mrdevelop.co.uk',
            },
        },
    },
});
