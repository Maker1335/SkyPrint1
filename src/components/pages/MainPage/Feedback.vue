<template>
    <div class="feedback">
        <div class="wrapper">
            <h4>Заинтересовали? <br> Тогда скорее звони нам!</h4>
            <div class="feedback_form">
                <div class="form">
                    <input type="text" placeholder="Имя" class="form_input">
                    <input type="phone" placeholder="Телефон" class="form_input">
                    <input type="email" placeholder="Почта" class="form_input">
                    <label class="form_checkbox"><input type="checkbox"> Нажимая кнопку "Отправить", я соглашаюсь с
                        условиями <a href="#">пользовательского соглашения</a> </label>
                    <button class="form_button">Отправить</button>
                </div>
                <div class="contact-manager" :class="{ selected: selectedContact === 'manager' }"
                    @click="selectContact('manager')">
                    <p>
                        Связаться с менеджером
                        <img v-if="selectedContact === 'manager'" :src="checkmark" alt="галочка" />
                    </p>
                </div>
                <div class="contact-designer" :class="{ selected: selectedContact === 'designer' }"
                    @click="selectContact('designer')">
                    <p>
                        Связаться с дизайнером
                        <img v-if="selectedContact === 'designer'" :src="checkmark" alt="галочка" />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import checkmark from "../../../assets/img/pages/MainPage/Feedback/checkmark.svg"
export default {
    name: 'Feedback',
    data() {
        return {
            selectedContact: 'manager', // Начальное состояние
            checkmark
        };
    },
    methods: {
        selectContact(contact) {
            this.selectedContact = contact;
        },
    },
}
</script>

<style lang="scss" scoped>
.feedback {
    background: #CEFFFD;
    margin-top: 80px;
    padding: 30px;

    .wrapper {
        display: flex;
        flex-direction: column;
    }

    h4 {
        font-size: 50px;
        font-weight: bold;
        color: #27625F;
        width: 600px;
        margin-bottom: 47px;
    }

    &_form {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 10px;

        .form {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(5, 1fr);
            grid-gap: 10px;

            &_input {
                width: 474px;
                height: 65px;
                border-radius: 5px;
                font-size: 16px;
                color: #80AAA8;
                padding-left: 10px;
                background: #FFFFFF;
                border: 0px;
                box-sizing: border-box;
            }

            &_checkbox {
                font-size: 16px;
                color: #27625F;
                width: 402px;

                a {
                    color: #27625F;
                    text-decoration: underline;
                }
            }

            &_button {
                width: 474px;
                height: 62px;
                border-radius: 5px;
                background: none;
                font-size: 20px;
                color: #27625F;
                transition: all 0.5s;

                &:hover {
                    background-image: url("../../../assets/img/background.png");
                    background-size: cover;
                    color: #FFFFFF;
                }
            }
        }

        .contact-manager,
        .contact-designer {
            width: 474px;
            height: 356px;
            border-radius: 5px;
            background-color: none;
            transition: background-color 0.5s;

            p {
                padding: 20px;
                font-size: 20px;
                color: #27625F;
                font-weight: bold;
            }
        }

        .selected {
            background-color: #FFFFFF;
        }
    }
}

@media (max-width: 1367px) {
    .feedback {
        margin-top: 80px;

        .wrapper {
            display: flex;
            flex-direction: column;
        }

        h4 {
            font-size: 30px;
            width: 400px;
            margin-bottom: 20px;
        }

        &_form {
            .form {
                grid-gap: 8px;

                &_input {
                    width: 100%;
                    height: 40px;
                    padding-left: 18px;
                }

                &_checkbox {
                    font-size: 12px;
                    width: 100%;
                }

                &_button {
                    width: 100%;
                    height: 40px;
                    font-size: 16px;
                }
            }

            .contact-manager,
            .contact-designer {
                width: 100%;
                height: 238px;
                border-radius: 5px;
                background-color: none;
                transition: background-color 0.5s;

                p {
                    padding: 20px;
                    font-size: 16px;
                    color: #27625F;
                    font-weight: bold;
                }
            }

            .selected {
                background-color: #FFFFFF;
            }
        }
    }
}
</style>