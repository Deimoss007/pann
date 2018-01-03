var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');

var signinForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="sgn">Spirit Growth Network </h1>
                                <form class="signup-form">
                                <div class="section">
                                    <a class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
                                    <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook-square"></i>${translate.message('signup.text')}</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section signupformm">           
                                    <div class="input-field col s12">
                                        <input id="username" type="text" class="validate">
                                        <label for="username">${translate.message('name')}</label>
                                    </div>

                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate">
                                        <label for="password">${translate.message('password')}</label>
                                    </div>
            
                                    <button class="btn waves-effect waves-light btn-signup" type="submit">${translate.message('signup.text')}</button>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                            ${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.call-to-action')}</a>
                            </div>
                        </div>
                    </div>`;
module.exports = landing(signinForm);
