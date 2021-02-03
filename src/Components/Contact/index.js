import React from 'react';
import {ContactDiv, ContactTitle, Span, ContactForm, FormInput, InputText, InputEmail, InputSub, Textarea, InputSubmit} from './style';
import {FooterDiv, FooterPre} from './../Footer/style'
const Contact = () => {
    return(
        <>
            <ContactDiv>
                <div class="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <ContactForm>
                        <FormInput>
                            <InputText placeholder="Your Name" />
                            <InputEmail placeholder="Your Email" />
                        </FormInput>
                        <InputSub placeholder="Your Subject" />
                        <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                        <InputSubmit type="submit" value="Send Message" />
                    </ContactForm>
                </div>
            </ContactDiv>
            <FooterDiv>
                <FooterPre> Copyright &copy; 2021 by Ultra Profile </FooterPre>
            </FooterDiv>
        </>
    )
}
export default Contact;