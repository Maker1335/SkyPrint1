<template>
    <div class="additional-info">
        <div class="additional-info_paragraphs">
            <p @click="togglePrices" class="additional-info_prices">Цены</p>
            <p @click="toggleRequirements" class="additional-info_requirements-for-layouts">Требования к макетам</p>
        </div>
        <div v-if="isModalOpen" class="modal" @click="closeModal">
            <img :src="prices[0]" class="modal_img" @click="closeModal">
        </div>
        <transition name="fade">
            <div v-if="showPrices" class="additional-info_content">
                <img :src="prices[0]" class="additional-info_content_img" @click="openModal">
            </div>
        </transition>
        <transition name="fade">
            <div v-if="showRequirements" class="additional-info_content">
                <p @click="toggleSection(1)">1. К печати принимаются макеты в следующих программах</p>
                <ol v-show="activeSection === 1">
                    <li>COREL DRAW (до 17 версии) – cdr, eps.</li>
                    <li>Adobe Photoshop (CC) – psd, tiff, jpg, bmp.</li>
                    <li>Adobe Acrobat – pdf.</li>
                    <li>Illustrator – ai, pdf.</li>
                    <li><button
                            @click="copyText('COREL DRAW (до 17 версии) – cdr, eps.\nAdobe Photoshop (CC) – psd, tiff, jpg, bmp.\nAdobe Acrobat – pdf.\nIllustrator – ai, pdf.')">Копировать</button>
                    </li>
                </ol>
                <p @click="toggleSection(2)">2. Общие требования</p>
                <ol v-show="activeSection === 2">
                    <li>Масштаб изображения 1:1.</li>
                    <li>Вылеты за обрезной формат (припуски) – 2,5 мм с каждой стороны.</li>
                    <li>Влеты (расстояние до значимых элементов: текст, логотип и т.д.) – 4 мм с каждой стороны.</li>
                    <li>При печати на фактурной (дизайнерской) бумаге, краска может ложиться неравномерно! Поэтому стоит
                        избегать полной заливки.</li>
                    <li>Черный цвет должен быть составной: C:75 M:75 Y:75 K:75.</li>
                    <li><button
                            @click="copyText('Масштаб изображения 1:1.\nВылеты за обрезной формат (припуски) – 2,5 мм с каждой стороны.\nВлеты (расстояние до значимых элементов: текст, логотип и т.д.) – 4 мм с каждой стороны.\nПри печати на фактурной (дизайнерской) бумаге, краска может ложиться неравномерно! Поэтому стоит избегать полной заливки.\nЧерный цвет должен быть составной C:75 M:75 Y:75 K:75.')">Копировать</button>
                    </li>
                </ol>
                <p @click="toggleSection(3)">3. Требования к растру и вектору</p>
                <ol v-show="activeSection === 3">
                    <li>Все изображения представлены в цветовой модели CMYK с разрешением не менее 300 dpi.</li>
                    <li>Эффекты (прозрачности, тени, градиент) должны быть растрированы 300 dpi.</li>
                    <li>Текст должен быть переведен в кривые.</li>
                    <li>Файл должен быть с разрешением не менее 300 dpi.</li>
                    <li>Файл должен быть представлен в цветовой модели CMYK.</li>
                    <li>Файл не должен содержать слоев, альфа-каналов.</li>
                    <li><button
                            @click="copyText('Все изображения представлены в цветовой модели CMYK с разрешением не менее 300 dpi.\nЭффекты (прозрачности, тени, градиент) должны быть растрированы 300 dpi.\nТекст должен быть переведен в кривые.\nФайл должен быть с разрешением не менее 300 dpi.\nФайл должен быть представлен в цветовой модели CMYK.\nФайл не должен содержать слоев, альфа-каналов.')">Копировать</button>
                    </li>
                </ol>
            </div>
        </transition>
    </div>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
    name: 'AdditionalInfo',
    data() {
        return {
            showPrices: true,
            showRequirements: false,
            activeSection: null,
            showPrices: true,
            isModalOpen: false,
        };
    },
    props: {
        prices: {
            type: Array, 
            required: true
        },
    },
    methods: {
        togglePrices() {
            this.showPrices = !this.showPrices;
            if (this.showPrices) this.showRequirements = false; // Закрываем требования, если открыты цены
        },
        toggleRequirements() {
            this.showRequirements = !this.showRequirements;
            if (this.showRequirements) this.showPrices = false; // Закрываем цены, если открыты требования
        },
        toggleSection(section) {
            this.activeSection = this.activeSection === section ? null : section;
        },
        copyText(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('Текст скопирован!');
            }).catch(() => {
                this.showToast('Ошибка копирования');
            });
        },
        showToast(message) {
            const toast = useToast();
            toast.success(message, {
                position: "top-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
            });
        },
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Убедитесь, что модал выше всего */
}

.modal_img {
    max-width: 90%;
    max-height: 90%;
}
.additional-info {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 35px;

    &_paragraphs {
        display: flex;
        gap: 32px;
    }

    &_prices,
    &_requirements-for-layouts {
        position: relative;
        cursor: pointer;
        font-weight: bold;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: #27625F;
        }
    }

    &_content {
        margin-top: 20px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
        cursor: pointer;

        p {
            margin-left: 20px;
            position: relative;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;

            &::after {
                content: "";
                border: 2px solid #27625F;
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 3px;
                transform: rotate(45deg);
                position: absolute;
                top: 5px;
                margin-left: 16px;
                box-sizing: border-box;
            }
        }

        ol {
            display: flex;
            flex-direction: column;

            li {
                list-style: decimal;
                margin-left: 60px;
                font-weight: normal;

                &:last-child {
                    list-style: none;
                }

                button {
                    cursor: pointer;
                    margin-top: 10px;
                    color: #27625F;
                    font-size: 16px;
                    background: none;
                    border: none;
                    border-bottom: 1px solid #27625F;
                }
            }
        }

        &_img {
            width: 100%;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    max-height: 1000px;
    opacity: 1;
    transition: max-height 0.5s ease, opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
    max-height: 0;
    opacity: 0;
}

@media (max-width: 1367px) {
    .additional-info {

        &_content {
            margin-top: 20px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-sizing: border-box;

            p {
                margin-left: 20px;
                position: relative;
                cursor: pointer;
                font-size: 20px;
                font-weight: bold;

                &::after {
                    position: relative;
                    top: -3px;
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .additional-info {
        font-size: 14px;
        margin-left: 0px;

        &_content {
            padding: 0px;

            p {
                font-size: 16px;
            }

            ol {
                display: flex;
                flex-direction: column;

                li {
                    button {
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>
