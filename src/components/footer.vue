<template>
    <div class="footer">
        <div class="wrapper">
            <ul class="footer_links">
                <li><router-link to="/kontakty/">Контакты</router-link></li>
                <li><router-link to="/katalog-produktsii">Каталог</router-link></li>
                <li><router-link to="/portfolio">Портфолио</router-link></li>
                <li><router-link to="/o-kompanii/">О нас</router-link></li>
                <li><router-link to="/trebovaniya-k-maketam/">Требования к макет</router-link></li>
                <li><router-link to="/dostavka/">Доставка</router-link></li>
                <li><router-link to="/oplata/">Оплата</router-link></li>
            </ul>
            <ul class="footer_catalog">
                <li>Широкоформатная печать</li>
                <li>Холсты</li>
                <li>Копировальные услуги</li>
                <li>Сувениры</li>
                <li>Полиграфия</li>
                <li>Дизайн</li>
                <li>Печать на холсте</li>
            </ul>
            <ul class="footer_catalog">
                <li>Широкоформатная печать</li>
                <li>Холсты</li>
                <li>Копировальные услуги</li>
                <li>Сувениры</li>
                <li>Полиграфия</li>
                <li>Дизайн</li>
                <li>Печать на холсте</li>
            </ul>
            <div class="orders">
                <p class="text">Приём заказов</p>
                <div class="manager">
                    <p class="title">Менеджер</p>
                    <p class="text"><img src="../assets/img/footer/phone.svg" alt="phone">+7 (351) 248-72-87, 245-45-75
                    </p>
                    <p class="text"><img src="../assets/img/footer/whatsapp.svg" alt="whatsapp">+7 (951) 817-71-92</p>
                    <p class="text"><img src="../assets/img/footer/email.svg" alt="email">zakaz@skyprint74.ru</p>
                </div>
                <div class="designer">
                    <p class="title">Дизайнер</p>
                    <p class="text"><img src="../assets/img/footer/email.svg" alt="email">design@skyprint74.ru</p>
                    <p class="text">Пн-Пт: 09:00 — 18:00</p>
                </div>
                <ul class="social_links">
                    <li><img src="../assets/img/footer/email.svg" alt="email"></li>
                    <li><img src="../assets/img/footer/whatsapp.svg" alt="WhatsApp"></li>
                    <li><img src="../assets/img/footer/telegram.svg" alt="tg"></li>
                    <li><img src="../assets/img/footer/vk.svg" alt="vk"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
    max-width: 1920px;
    margin-top: 111px;
    background: #27625F;
    padding: 75px 35px 35px 35px;
    z-index: 1;
    color: white;
    box-sizing: border-box;

    .wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    &_links {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            font-size: 30px;
            font-weight: bold;

            a {
                text-decoration: none;
                color: white;
                user-select: text;
            }
        }
    }

    &_catalog {
        display: flex;
        flex-direction: column;
        gap: 13px;

        li {
            font-size: 20px;
        }
    }

    .orders {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .text {
            font-size: 20px;
            font-weight: bold;
        }

        .title {
            font-size: 16px;
        }

        .manager,
        .designer {
            display: flex;
            flex-direction: column;
            gap: 10px;

            img {
                width: 17px;
                height: 17px;
            }

            .text {
                display: flex;
                align-items: center;
                gap: 5px;
            }
        }

        .social_links {
            display: flex;
            gap: 33px;

            img {
                width: 30px;
                height: 30px;
            }
        }
    }
}

@media (max-width: 1367px) {
    .footer {
        margin-top: 60px;

        &_links {
            gap: 15px;

            li {
                font-size: 20px;
            }
        }

        &_catalog {
            li {
                font-size: 16px;
            }
        }

        .orders {
            display: flex;
            flex-direction: column;
            gap: 15px;

            .manager,
            .designer {
                .text {
                    font-size: 16px;
                }
            }

            .social_links {
                gap: 20px;

                img {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .footer {
        margin-top: 30px;
        padding: 20px 10px;

        &_catalog {
            display: none;
        }

        .wrapper {
            display: flex;
            flex-direction: column;
            gap: 50px;
        }
    }
}
</style>