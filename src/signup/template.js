var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');

var signupForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="sgn">Spirit Growth Network </h1>
                                <form class="signup-form">
                                    <h2> ${translate.message('signup.subheading')}
                                    </h2>
                                <div class="section">
                                    <a class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
                                    <a class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook-square"></i>${translate.message('signup.text')}</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section signupformm">           
                                    <div class="input-field col s6">
                                        <input id="first_name" type="text" class="validate">
                                        <label for="first_name">${translate.message('name')}</label>
                                    </div>
            
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate">
                                        <label for="last_name">${translate.message('lastname')}</label>
                                    </div>
            
                                    <div class="input-field col s12">
                                        <input id="username" type="text" class="validate">
                                        <label for="username">${translate.message('username')}</label>
                                    </div>
            
                                    <div class="input-field col s12">
                                        <input id="email" type="email" class="validate">
                                        <label for="email" data-error="¡Oh oh!, Email no válido" data-success="¡Email válido!">${translate.message('email')}</label>
                                    </div>
            
                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate">
                                        <label for="password">${translate.message('password')}</label>
                                    </div>
            
                                    <button class="btn waves-effect waves-light btn-signup" type="submit">${translate.message('signup.call-to-action')}</button>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="login-box">
                                ${translate.message('signup.have-account')}
                                <a href="/signin">${translate.message('signin')}</a>
                            </div>
                        </div>
                    </div>`;
module.exports = landing(signupForm);