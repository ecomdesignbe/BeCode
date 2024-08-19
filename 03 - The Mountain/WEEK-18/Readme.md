# Project : Stop Watch
In this first project, we will create a small app of a stopwatch.

The stopwatch should display the minutes, seconds and centiseconds.
We must have a START, a PAUSE, a RESET and a LAP buttons.
START starts the counter, that refreshes every centisecond. (10 times a millisecond). (Once it's started, the text should be RESUME and can't be clicked)
PAUSE stops the counter without reseting it. RESUME should be able to resume it.
RESET resets the counter to 0.
LAP displays the exact time when we clicked (the counter continues without stoping)

In this project, you will be led to master :
- useEffect
- useState
- Being able to set the state from previous state
- Establish logic with setTimeout, etc.

https://render-react-stopwatch.onrender.com/


# Project : Markdown reader
In this project, we will have a textarea input where we can write markdown and next to it see the result in html.

Bonus : Create some buttons heading 1, heading 2, bold, italic, horizontal line, etc. to insert automatically the markdown syntax in the textarea to facilitate de writing of the markdown.

In this project, you will be led to master :
- the librarie marked
- the insertion of html in a react component (dangerouslySetInnerHtml)

https://render-react-markdown-editor.onrender.com/


# Project : Multi Step Form and sending emails with React Email and EmailJS
In this project we will create a multi step form. Multi step forms avoid us to have a huge monolithic form that scares the user and it's very popular (as you probably already know :P )

We will create a review form in your website.

**STEPS**

1. Identification

   - Ask for name and email of the user

2. Review

   - Put 4 icons with smileys ("unhappy", "could be better", "satisfied", "very statisfied") that can be selected. (radio buttons ?...)
   - A textarea to eventual comments (not required)

3. Send
   - Put a text summarizing the infos the user provided (his name, email, review and message)
   - Button with "send" cta.

When he clicks "send", send an actual email using the platform [EmailJs](https://www.emailjs.com/). You will have to register for the free account and link it to your email provider (like gmail for example). This will use your gmail account to send the emails with your form content.

- Create an email template in your EmailJS dashboard that recups the data from your form and send yourself an email like :

```
Hello Henrique,

You just received a review mail from Barack Obama (barack@usa.com)

His review was : unhappy

His message was : "This stop-smoking product doesn't work. I want to be refunded"
```

Notes :

- You should be able to navigate back and forward in your steps without losing the inputs the user already entered.
- Make it pretty with Tailwind.
- Don't go crazy with the emails you send, the free account only gives you 300 request per month.

Plus :

- Use Formik for the form and Yup for the validation.



