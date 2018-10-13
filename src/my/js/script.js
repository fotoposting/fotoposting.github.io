var body = $('body');
var i = 0;

$(document).ready(function () {
    /*START*/

    body.append(
        Lb(
            "#ФотоПостинг",
            "example",
            $('<form>', {
                action: "https://docs.google.com/forms/d/e/1FAIpQLSfyQglLrUM18bsGrwxyBm5X0K0_XUAbw4XAvJGKp5l66DPhuQ/formResponse",
                target: "_self",
                method: "POST",
                id: "mG61Hd"
            }).append(
                $('<p>', {
                    class: "form-group",
                }).append(
                    "Заявка на участие в проекте"
                ),
                Lc("Имя", "text", "2005620554"),
                Lc("Телефон", "tel", "1166974658"),
                $('<div>', {
                    class: "form-group form-check"
                }).append(
                    $('<input>', {
                        type: "checkbox",
                        class: "form-check-input",
                        id: "229502200Check",
                        name: "entry.229502200",
                        value: "Даю согласие на обработку персональных данных",
                        "required": "true"
                    }).append(

                    ),
                    $('<label>', {
                        class: "form-check-label",
                        for: "229502200Check"
                    }).append(
                        "Даю согласие на ",
                        $('<a>', {
                            href: "#",
                            "data-toggle": "modal",
                            "data-target": "#example1ModalCenter"
                        }).append(
                            "обработку персональных данных"
                        )
                    )
                ),
                $('<button>', {
                    type: "submit",
                    class: "btn btn-primary"
                }).append(
                    "Подать заявку"
                )
            )
        ),
        Lb(
            "Политика конфиденциальности",
            "example1",
            $('<form>', {

            }).append(
                $('<p>', {
                    class: "form-group"
                }).append(
                    "Обработка персональных данных Пользователя осуществляется в соответствии с законодательством Российской Федерации. Администрация Сайта обрабатывает персональные данные Пользователя в целях предоставления Пользователю услуг. Пользователь заполняя форму «Имя, «E-mail» и «Телефон», даёт согласие на обработку своих персональных данных – имени и адреса электронной почты. Под обработкой персональных данных понимается сбор, систематизация, накопление, уточнение (обновление, изменение). Обработка осуществляется с использованием средств автоматизации и/или без использования таких средств, в целях реализации мероприятий оповещения пользователя о изменениях на сайте и по поддержке обратной связи с пользователями сайта. В соответствии с ФЗ от 27.07.2006 г. № 152-ФЗ «О персональных данных»я согласен, при необходимости, во время заполнения информации при регистрации в сайте, входе в Личный кабинет или при отправке заявки на участие в сеансе онлайн-связи предоставить информацию, относящуюся к моей личности: мое имя, мой адрес электронной почты и телефон или скайп."
                )
            )
        )
    );

    Loading();
    Loading();

    Size();

    $(window).scroll(function () {
        if ((($(window).scrollTop() + $(window).height() + 250)) >= $(document).height()) {
            Loading();
            Loading();
        }
    });

    $(window).resize(function () {
        Size();
    });

    /*for (n = 0; n < 20; n++)
        Loading();*/

    function Size() {
        if (992 <= body.width()) {
            Loading();
        } else if (1200 <= body.width()) {
            Loading();
            Loading();
        }
    }


    function Loading() {
        switch (i) {
            case 0:
                body.append(
                    A()
                );
                break;

            case 1:
                body.append(
                    B()
                );
                break;

            case 2:
                body.append(
                    I()
                );
                break;

            case 3:
                body.append(
                    C()
                );
                break;

            case 4:
                body.append(
                    D()
                );
                break;

            case 5:
                body.append(
                    E()
                );
                break;
            case 6:
                body.append(
                    F()
                );
                break;
            case 7:
                body.append(
                    G()
                );
                break;
            case 8:
                body.append(
                    FD("parallax-window-4", "left", ["#ФотоКурс", "Чтобы ваше фото с каждым днем становились всё лучше и качественнее мы предлагаем вам бесплатное обучение по фотографии и ее обработке."]),
                );

                body.append(
                    FD("parallax-window-5", "center", ["#КурсПоБлогингу", "Чтобы ваш контент стал интересным и привлекательным, мы предлагаем пройти обучение по блоггингу и копирайтингу, научиться писать уникальные посты. Посты написанные Вами лично сделают Вашу страничку особенной."]),
                );

                body.append(
                    FD("parallax-window-6", "right", ["#StoryTelling", "Будьте в тренде социальных сетей, рассказывая завораживающие истории. Мы вас научим писать трогательные истории передовая свои чувства, вызывая эмоции у своей аудитории."]),
                );
                break;
                /*case 11:
                    body.append(
                        H()
                    );
                    break;*/
        }

        i++;
    }

    function A() {
        return $('<div>', {
            class: "text-light parallax-window-1",
            style: "",
        }).append(
            $('<div>', {
                class: "",
                style: "background-color: rgba(0, 0, 0, 0.70);"
            }).append(
                $('<div>', {
                    class: "container",
                    style: ""
                }).append(
                    $('<div>', {
                        class: "pt-5 pb-5 row flex-column align-items-center text-center",
                        style: ""
                    }).append(
                        $('<h1>', {
                            class: "col-auto",
                            style: ""
                        }).append(
                            "#ФотоПостинг"
                        ),
                        $('<h3>', {
                            class: "col-lg-8",
                            style: ""
                        }).append(
                            "или как создать свой онлайн-бизнес без вложений с помощью фотографий"
                        ),
                        $('<p>', {
                            class: "col-lg-6",
                            style: ""
                        }).append(
                            "Вы вкладываете свои фото, а мы наше время и профессионализм."
                        ),
                        $('<button>', {
                            class: "col-auto btn btn-success",
                            type: "button",
                            "data-toggle": "modal",
                            "data-target": "#exampleModalCenter"
                        }).append(
                            "Узнать подробнее"
                        )
                    )
                )
            )
        );
    }

    function B() {
        return $('<div>', {
            class: "container",
            style: ""
        }).append(
            $('<div>', {
                class: "pt-5 pb-5 row flex-column align-items-center",
                style: ""
            }).append(
                $('<h2>', {
                    class: "col-auto text-center mb-5",
                    style: ""
                }).append(
                    "Для кого наш проект"
                ),
                $('<div>', {
                    class: "col-auto",
                    style: ""
                }).append(
                    $('<div>', {
                        class: "row justify-content-center",
                        style: ""
                    }).append(
                        FA(0,
                            [
                                "для тех, у кого нет денег начать свой онлайн-бизнес, но есть желание",
                                "для тех, хочет в будущем иметь доход в сети интернет",
                            ], "background-image: url('/src/my/img/1/2.jpg');background-size: cover;"),
                        FA(0,
                            [
                                "для тех, у кого нет времени на создание онлайн бизнеса",
                                "для тех, у кого есть бизнес, но нужны новые возможности его развития",
                            ], "background-image: url('/src/my/img/1/1.jpg');background-position-x: -40px;background-size: cover;"),
                        FA(0,
                            [
                                "для студентов, мам в декрете которые хотят иметь доход, работая только в телефоне",
                                "и просто для всех, кто любит делать классные фото",
                            ], "background-image: url('/src/my/img/1/3.jpg');background-position-x: -80px;background-size: cover;"),
                    )
                )
            )
        );
    }

    function C() {
        return $('<div>', {
            class: "container",
            style: ""
        }).append(
            $('<div>', {
                class: "pt-5 pb-5 row flex-column align-items-center",
                style: ""
            }).append(
                $('<h2>', {
                    class: "col-auto text-center mb-5",
                    style: ""
                }).append(
                    "Вы научитесь преображать фотографии:"
                ),
                $('<div>', {
                    class: "col-auto",
                    style: ""
                }).append(
                    $('<div>', {
                        class: "row justify-content-center",
                        style: ""
                    }).append(
                        FA(1,
                            [
                                "Романтичная",
                            ], "background-image: url(/src/my/img/2/1.jpg);background-size: cover;"),
                        FA(1,
                            [
                                "Загадочная",
                            ], "background-image: url(/src/my/img/2/2.jpg);background-size: cover;"),
                        FA(1,
                            [
                                "Страстная",
                            ], "background-image: url(/src/my/img/2/3.jpg);background-size: cover;"),
                        FA(1,
                            [
                                "Сказочная",
                            ], "background-image: url(/src/my/img/2/4.jpg);background-size: cover;"),
                    )
                )
            )
        );
    }

    function D() {
        return $('<div>', {
            class: "text-light parallax-window-2",
            style: ""
        }).append(
            $('<div>', {
                class: "",
                style: "background-color: rgba(0, 0, 0, 0.70);"
            }).append(
                $('<div>', {
                    class: "container pt-5 pb-5",
                    style: ""
                }).append(
                    $('<div>', {
                        class: "pt-5 pb-5 row flex-column align-items-center text-center",
                        style: ""
                    }).append(
                        $('<h1>', {
                            class: "col-md-auto col-lg-8",
                            style: ""
                        }).append(
                            "#ФотоПостинг - это инвестиция ваших фотографий в будущее"
                        ),
                        $('<button>', {
                            class: "col-auto btn btn-success",
                            type: "button",
                            "data-toggle": "modal",
                            "data-target": "#exampleModalCenter"
                        }).append(
                            "Связаться с нами"
                        )
                    )
                )
            )
        );
    }

    function E() {
        return $('<div>', {
            class: "container",
            style: ""
        }).append(
            $('<div>', {
                class: "pt-5 pb-5 row flex-column align-items-center",
                style: ""
            }).append(
                $('<h2>', {
                    class: "col-auto text-center mb-5",
                    style: ""
                }).append(
                    "Ты получаешь:"
                ),
                $('<div>', {
                    class: "col-auto",
                    style: ""
                }).append(
                    $('<div>', {
                        class: "row",
                        style: ""
                    }).append(
                        $('<div>', {
                            class: "col-lg",
                            style: ""
                        }).append(
                            $('<div>', {
                                class: "row flex-column align-items-center",
                                style: ""
                            }).append(
                                FB(1, 0, [
                                    "fas fa-paperclip",
                                    "Рабочий аккаунт в Инстаграм",
                                    "Результатом продвижения вашей страницы в инстаграм станет рабочий аккаунт, ориентированный на свою целевую аудиторию активных подписчиков и имеющий постоянный охват."
                                ]),
                                FB(1, 1, [
                                    "fas fa-dollar-sign",
                                    "Прибыль",
                                    "Использование аккаунта как рабочего инструмента и монетизация его  через инфобизнес и онлайн коммерцию со временем начнет приносить Вам стабильный доход."
                                ]),
                                /*
                                                                FB(1, 0, [
                                                                    "fas fa-business-time",
                                                                    "Обучение",
                                                                    "Каждый участник проекта, при желании, может пройти курсы по исскуству фотографии и научиться пользоваться программами по их обработке."
                                                                ]),*/
                            )
                        ),
                        $('<div>', {
                            class: "col-lg",
                            style: ""
                        }).append(
                            $('<div>', {
                                class: "row flex-column align-items-center",
                                style: ""
                            }).append(
                                FB(0, 0, [
                                    "fas fa-users",
                                    "Возможность участия",
                                    "Участники проекта могут принимать участие в ведении своего рабочего аккаунта, присылая видео для сторис, записывать прямые эфиры, чтобы аккаунт быстрее монетизировался."
                                ]),
                                FB(0, 1, [
                                    "fas fa-user-graduate",
                                    "Обучение",
                                    "Каждому участнику проекта предлагается обучение : по искусству фотографии и программам по обработке фото, по блоггингу и StoryTelling."
                                ]),
                                /*
                                                                FB(0, 1, [
                                                                    "fas fa-child",
                                                                    "Свободу",
                                                                    "Социальные сети, новые технологии и наша бизнес-модель сделают тебя богаче и свободнее. Живи в кайф и зарабатывай из любой точки мира."
                                                                ]),*/
                            )
                        )
                    )
                )
            )
        );
    }

    function F() {
        return $('<div>', {
            class: "text-light parallax-window-3",
            style: ""
        }).append(
            $('<div>', {
                class: "",
                style: "background-color: rgba(0, 0, 0, 0.70);"
            }).append(
                $('<div>', {
                    class: "container pt-5 pb-5",
                    style: ""
                }).append(
                    $('<div>', {
                        class: "pt-5 pb-5 row flex-column align-items-center text-center",
                        style: ""
                    }).append(
                        $('<h1>', {
                            class: "col-md-9 col-lg-6",
                            style: ""
                        }).append(
                            "#ФотоПостинг - инвестиция ваших фотографий"
                        ),
                        $('<p>', {
                            class: "col-md-9 col-lg-6",
                            style: ""
                        }).append(
                            "Хочу чтобы со мной связались и рассказали о проекте и всех преимуществах"
                        ),
                        $('<button>', {
                            class: "col-auto btn btn-success",
                            type: "button",
                            "data-toggle": "modal",
                            "data-target": "#exampleModalCenter"
                        }).append(
                            "Связаться с нами"
                        )
                    )
                )
            )
        );
    }

    function G() {
        return $('<div>', {
            class: "container",
            style: ""
        }).append(
            $('<div>', {
                class: "pt-5 pb-5 row flex-column align-items-center",
                style: ""
            }).append(
                $('<h2>', {
                    class: "col-auto text-center mb-5",
                    style: ""
                }).append(
                    "Как попасть в команду"
                ),
                $('<div>', {
                    class: "col-auto",
                    style: ""
                }).append(
                    $('<div>', {
                        class: "row justify-content-center",
                        style: ""
                    }).append(
                        FC(["ШАГ #1", "Заполняете заявку на сайте"]),
                        FC(["ШАГ #2", "С вами свяжутся и ответят на все вопросы"]),
                        FC(["ШАГ #3", "Вы принимаете решение и получаете дальнейшие инструкции"]),
                        FC(["ШАГ #4", "Готовите свои фотографии и высылаете их нам"]),
                        FC(["ШАГ #5", "Мы, создаём вам рабочий аккаунт и профессионально продвигаем его"]),
                        FC(["ШАГ #6", "Вы, при желании, получаете возможность пройти обучение,которое на порядок повысит скорость вашего продвижения в социальных сетях."]),
                    )
                )
            )
        );
    }

    function H() {
        return $('<div>', {
            class: "container-fluid",
            style: ""
        }).append(
            $('<div>', {
                class: "pt-2 pb-2 row flex-column align-items-end",
                style: ""
            }).append(
                $('<div>', {
                    class: "col-auto text-center small text-secondary",
                    style: ""
                }).append(
                    "@copyright"
                )
            )
        );
    }

    function I() {
        return $('<div>', {
            class: "container-fluid",
            style: ""
        }).append(
            $('<div>', {
                class: "pt-2 pb-2 row flex-column align-items-center",
                style: ""
            }).append(
                $('<h2>', {
                    class: "col-auto text-center mb-5",
                    style: ""
                }).append(
                    "О проекте"
                ),
                $('<iframe>', {
                    id: "player",
                    class: "col-auto",
                    style: "",
                    src: "https://www.youtube.com/embed/CgTYk4T8AZA?rel=0&amp;showinfo=0",
                    frameborder: 0,
                    allow: "autoplay; encrypted-media",
                    allowfullscreen: true,
                }).append(
                    "@copyright"
                )
            )
        );
    }


    function FA(positionBl, arr, dad) {

        var a, b, c, d;

        a = b = c = d = "";

        switch (positionBl) {
            case 0:
                a = "rounded-circle";
                b = "height: 200px;width: 200px;";
                c = "";
                d = "col-md-6 col-lg-4";
                break;
            case 1:
                a = "";
                b = "height: 200px;width: 300px;";
                c = $('<button>', {
                    class: "col-auto btn btn-success mb-3",
                    type: "button",
                    "data-toggle": "modal",
                    "data-target": "#exampleModalCenter"
                }).append(
                    "Это про меня"
                );
                d = "col-md-6 col-lg-5";

                break;
        }

        var bb = $('<div>', {
            class: "col-auto",
            style: ""
        });

        $.each(arr, function (i, val) {
            bb.append(
                FE(val)
            );
        });

        return $('<div>', {
            class: d,
            style: ""
        }).append(
            $('<div>', {
                class: "row flex-column align-items-center text-center",
                style: ""
            }).append(
                $('<div>', {
                    class: "col-auto mt-2 mb-2 " + a,
                    style: b + " " + dad
                }).append(

                ),
                $('<div>', {
                    class: "col-auto",
                    style: ""
                }).append(
                    bb
                ),
                //c
            )
        );
    }

    function FB(positionBl, positionBD, arr) {

        var a, b, c, d, e, f;

        a = b = c = d = e = f = "";


        switch (positionBl) {
            case 0:

                switch (positionBD) {
                    case 0:
                        d = "";
                        e = "";
                        f = "text-right";
                        break;
                    case 1:
                        d = "flex-row-reverse";
                        e = "text-right";
                        f = "";
                        break;
                }

                a = d + " flex-lg-row";
                b = e + " text-lg-left";
                c = f + " text-lg-right";
                break;
            case 1:

                switch (positionBD) {
                    case 0:
                        d = "";
                        e = "";
                        f = "text-right";
                        break;
                    case 1:
                        d = "flex-row-reverse";
                        e = "text-right";
                        f = "";
                        break;
                }

                a = d + " flex-lg-row-reverse";
                b = e + " text-lg-right";
                c = f + " text-lg-left";
                break;
        }

        return $('<div>', {
            class: "col-auto",
            style: ""
        }).append(
            $('<div>', {
                class: "row " + a,
                style: ""
            }).append(
                $('<div>', {
                    class: "col-auto col-lg-2 " + c,
                    style: ""
                }).append(
                    $('<i>', {
                        class: "text-primary fa-2x " + arr[0]
                    })
                ),
                $('<div>', {
                    class: "col " + b,
                    style: ""
                }).append(
                    $('<div>', {
                        class: "row flex-column",
                        style: ""
                    }).append(
                        $('<h3>', {
                            class: "col-auto",
                            style: ""
                        }).append(
                            $('<u>', {
                                class: "",
                                style: ""
                            }).append(
                                arr[1]
                            )
                        ),
                        $('<p>', {
                            class: "col-auto",
                            style: ""
                        }).append(
                            arr[2]
                        )
                    )
                )
            )
        );
    }

    function FC(arr) {
        return $('<div>', {
            class: "col-md-4",
            style: ""
        }).append(
            $('<div>', {
                class: "row flex-column align-items-center text-center",
                style: ""
            }).append(
                $('<h3>', {
                    class: "col-auto text-primary mt-2 mb-2 ",
                    style: ""
                }).append(
                    arr[0]
                ),
                $('<p>', {
                    class: "col-auto",
                    style: ""
                }).append(
                    arr[1]
                )
            )
        );
    }

    function FD(a, positionBl, arr) {

        var b, c, d, e;

        b = c = d = e = "";

        switch (positionBl) {
            case "left":
                b = "col";
                c = "align-items-end text-right";
                e = "col-0 col-sm";
                break;
            case "center":
                b = "col-0";
                c = "align-items-center text-center";
                d = "justify-content-center";
                e = "col-sm-8";
                break;
            case "right":
                b = "col";
                c = "align-items-start";
                d = "flex-row-reverse";
                e = "col-0 col-sm";
                break;
        }

        return $('<div>', {
            class: "text-light " + a,
            style: ""
        }).append(
            $('<div>', {
                class: "container-fluid",
                style: ""
            }).append(
                $('<div>', {
                    class: "row " + d,
                    style: ""
                }).append(
                    $('<div>', {
                        class: "rounded " + e,
                        style: "background-color: rgba(0, 0, 0, 0.70);"
                    }).append(
                        $('<div>', {
                            class: "pt-5 pb-5 row flex-column " + c,
                            style: ""
                        }).append(
                            $('<div>', {
                                class: "col-md-9 col-lg-8 border-bottom h5-nm h4-mm h3-sm",
                                style: ""
                            }).append(
                                arr[0]
                            ),
                            $('<p>', {
                                class: "col-md-9 col-lg-8",
                                style: ""
                            }).append(
                                arr[1]
                            ),
                            $('<button>', {
                                class: "col-auto btn btn-success ml-3 mr-3",
                                type: "button",
                                "data-toggle": "modal",
                                "data-target": "#exampleModalCenter"
                            }).append(
                                "Подробнее"
                            )
                        )
                    ),
                    $('<div>', {
                        class: b,
                        style: ""
                    }).append(

                    )
                )
            )
        );
    }

    function FE(a) {
        return $('<p>', {
            class: "col-auto",
            style: ""
        }).append(
            $('<i>', {
                class: "fas fa-angle-down text-primary fa-2x mr-2"
            }),
            a
        )
    }

    /*$('.parallax-window1').parallax({imageSrc: '/src/my/img/1_2.png', speed:0.3});
    $('.parallax-window2').parallax({imageSrc: '/src/my/img/2_2.png', speed:0.3});
    $('.parallax-window3').parallax({imageSrc: '/src/my/img/3_2.png', speed:0.3});
    $('.parallax-window4').parallax({imageSrc: '/src/my/img/4.png', speed:0.3});
    $('.parallax-window5').parallax({imageSrc: '/src/my/img/5.jpg', speed:0.3});
    $('.parallax-window6').parallax({imageSrc: '/src/my/img/6.jpg', speed:0.3});*/

    function Lc(v_text, v_type, v_name) {
        return $('<div>', {
            class: "form-group"
        }).append(
            $('<label>', {
                for: v_name + "Input"
            }).append(
                v_text
            ), $('<input>', {
                type: v_type,
                class: "form-control",
                id: v_name + "Input",
                name: "entry." + v_name,
                placeholder: v_text,
                autocomplete: "off",
                "required": "true"
            }).append(

            )
        );
    }

    function Lb(v_header, v_id, v_form) {
        return $('<div>', {
            class: ""
        }).append(
            $('<div>', {
                class: "modal fade",
                id: v_id + "ModalCenter",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": v_id + "ModalCenterTitle",
                "aria-hidden": "true"
            }).append(
                $('<div>', {
                    class: "modal-dialog modal-dialog-centered",
                    role: "document"
                }).append(
                    $('<div>', {
                        class: "modal-content"
                    }).append(
                        $('<div>', {
                            class: "modal-header"
                        }).append(
                            $('<h5>', {
                                class: "modal-title text-center align-items-center",
                                id: v_id + "ModalCenterTitle"
                            }).append(
                                v_header
                            ),
                            $('<button>', {
                                type: "button",
                                class: "close",
                                "data-dismiss": "modal",
                                "aria-label": "Close"
                            }).append(
                                $('<span>', {
                                    "aria-hidden": "true"
                                }).append(
                                    "&times;"
                                )
                            )
                        ),
                        $('<div>', {
                            class: "modal-body"
                        }).append(
                            v_form
                        )
                    )
                )
            )
        );
    }

    /*FINISH*/
});