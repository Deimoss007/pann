var yo = require('yo-yo');
var translate = require('../translate');

var el = yo`<footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="sgn white-text">Spirit Growth Network</h5>
                            <p class="parrafov grey-text text-lighten-4">«22 No se contenten solo con escuchar la palabra, pues así se engañan ustedes mismos. Llévenla a la práctica. 23 El que escucha
                            la palabra, pero no la pone en práctica es como el que se mira el rostro en un espejo 24 y, después de mirarse, se va y se
                            olvida en seguida de cómo es. 25 Pero quien se fija atentamente en la ley perfecta que da libertad, y persevera en ella,
                            no olvidando lo que ha oído, sino haciéndolo, recibirá bendición al practicarla».
                            </p>
                            <p class="cita grey-text text-lighten-4">-Santiago 1:22-25</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Contacto</h5>
                            <section>
                                <div class="social-share fb">
                                    <span class="fb-inner"></span>
                                    <a class="cta fb" href="#">Like</a>
                                </div>
                                <div class="social-share tw">
                                    <span class="tw-inner"></span>
                                    <a class="cta tw" href="#">Tweet</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <p class="left">© 2018 Copyright Spirit Growth Network</p>
                        <p class="love right">Made with <i class="icon ion-heart"></i> in Colombia</p>
                    </div>
                </div>
            </footer>`;


function lang(locale) {
    localStorage.locale = locale;
    location.reload();
    return false;
}

document.body.appendChild(el);