import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>its, {name}!</h1>
    <h2> you can contact me on {email}</h2>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
