import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import classes from "./components/AuthStyle.module.css";

const AuthPage = () => {
    return (
        <div>
            <Header title="Authorization"/>

            <div id="content">

                <form name="form" className={classes.form} method="post" action="/auth">

                    <fieldset>
                        <legend>Данные пользователя</legend>
                        <p>
                            <input type="text" className={classes.form__input} id="name" name="name" placeholder="Your name or email" required=""/>
                            <label for="name" className={classes.form__label}>Your name or email</label>
                        </p>
                        <p>
                        <input type="password" className={classes.form__input} id="password" name="password" placeholder="Password" required=""/>
                        <label for="password" className={classes.form__label}>Password</label>
                        </p>
                        <p>
                            <button type="submit">Войти</button>
                        </p>
                    </fieldset>
                </form>

            </div>

            <Footer />
        </div>
    );
};

export default AuthPage;





