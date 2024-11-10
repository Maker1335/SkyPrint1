import { defineStore } from 'pinia'
import { useImagesStore } from './imagesStore.js' 

export const useProductStore = defineStore('product', {
    state: () => {
        const imagesStore = useImagesStore();
        return {
        products: [
            {
                id: 1,
                name: 'Ручки',
                img: imagesStore.images.pens,
                category: 'Сувениры',
                description: 'Наши ручки — это не просто письменные инструменты, а стильные аксессуары, которые подчеркнут ваш имидж. Мы предлагаем широкий выбор моделей, от классических до современных, с возможностью нанесения логотипа или индивидуального дизайна. Заказывая ручки у нас, вы получаете высокое качество и быструю доставку, что делает их идеальными для корпоративных подарков и рекламных акций.',
                count: 'От 50 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 8 ₽',
                    customFields: {
                        'Тираж': ['От 50 шт'],
                    },
                    dimensions: ['50 х 90 мм', '90 х 100 мм', '40 х 80 мм', '200 х 150 мм', '50 х 150 мм'],
                    paperType: ['Мелованная 100-300/м²', 'Фактурная 100-300/м²', 'Цветная 100-300/м²'],
                    printType: ['Полноцветная с одной стороны'],
                    lamination: ['Матовая', 'глянцевая'],
                    angles: ['Скругленные', 'без скругления'],
                    rowspan: 2,
                    colspan: 2,
                },
                prices: [
                    imagesStore.images.pensPrices

                ],
                save: false,
            },
            {
                id: 2,
                name: 'Холсты',
                img: imagesStore.images.canvases,
                category: 'Тиражирование',
                description: "Создайте уникальное произведение искусства на наших холстах! Мы используем только качественные материалы, что гарантирует долговечность и насыщенность цвета ваших работ. Заказывая холсты в нашей типографии, вы получаете возможность печати как стандартных размеров, так и индивидуальных форматов. Профессиональная печать и быстрая обработка заказов — наши главные преимущества.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 910 ₽',
                    customFields: {
                        'Размеры': ['20x30', '30x40', '40x50', '50x70', '80x100', '80x80', '80x60', '30x30', '40x60', '60x90', '90x90', '150x120'],
                        'Тип печати': ['Печать на холсте'],
                    },
                    rowspan: 2,
                    colspan: 12,
                },
                prices: [
                    imagesStore.images.canvasesPrices
                ],
                save: false
            },
            {
                id: 3,
                name: 'Ламинирование',
                img: imagesStore.images.lamination,
                category: 'Копировальные услуги',
                description: `Ламинирование — это надежный способ защитить ваши документы и изображения от повреждений и загрязнений. Мы предлагаем услуги ламинирования различной толщины и формата, что позволяет сохранить ваши материалы в идеальном состоянии на долгое время. Выбирая нашу типографию, вы гарантированно получите качественное исполнение и оперативное выполнение заказа.`,
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 30 ₽',
                    customFields: {
                        'тираж': ['10 шт'],
                        'Формат': ['A4', 'A3', 'A2', 'A1', 'A0'],
                    },
                },
                prices: [
                    imagesStore.images.laminationPrices
                ],
                save: false
            },
            {
                id: 4,
                name: 'Магнитный винил',
                img: imagesStore.images.magneticVinyl,
                category: 'Копировальные услуги',
                description: "Наш магнитный винил идеально подходит для создания ярких рекламных материалов или вариант подарка на любой праздник в виде магнитов на холодильник. Он легко наносится и снимается, не оставляя следов. Мы предлагаем индивидуальные размеры и печать по вашему дизайну, что делает наш продукт универсальным для любых нужд.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 43 ₽',
                    customFields: {
                        'Тираж': ['1-49 шт, 50-99 шт', '100-199 шт', '200-499 шт', '500-999 шт', '1000-2499 шт', '<2500 шт'],
                        'Размеры': ['55x55 мм', '50x80 мм', '70x100 мм', '100x150 мм', '150x200 мм', '200x300 мм'],
                    },
                },
                prices: [
                    imagesStore.images.magneticVinylPrice,
                ],
                save: false
            },
            {
                id: 5,
                name: 'Шоппер',
                img: imagesStore.images.shopper,
                category: 'Футболки, текстиль',
                description: "Экологичные шопперы — это не только удобно, но и стильно! Наши многоразовые сумки изготавливаются из прочных материалов и могут быть персонализированы по вашему желанию. Выбирая шопперы у нас, вы поддерживаете экологические инициативы и получаете качественный продукт, который прослужит долго.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 800 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.shopperPrices
                ],
                save: false
            },
            {
                id: 6,
                name: 'Подушка',
                img: imagesStore.images.pillow,
                category: 'Футболки, текстиль',
                description: "Добавьте уют в ваш интерьер с нашими подушками! Мы предлагаем печать на текстиле с возможностью создания уникальных дизайнов. Это отличный подарок для близких или стильный элемент декора.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 600 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.pillowPrices
                ],
                save: false
            },
            {
                id: 7,
                name: 'Футболка',
                img: imagesStore.images.t_shirt,
                category: 'Футболки, текстиль',
                description: "Создайте свою уникальную футболку с помощью нашей типографии! Мы предлагаем печать на футболках с использованием термотрансферной или сублимационной печати. Это идеальный вариант для команд, мероприятий или просто для выражения вашего стиля. Быстрая обработка заказа и высокое качество гарантированы!",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за штуку (с нанесением)',
                    estimatedCostPrice: 'от 1300 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.t_shirtPrices,
                ],
                save: false
            },
            {
                id: 8,
                name: 'Визитки',
                img: imagesStore.images.busrinessCards,
                category: 'Футболки, текстиль',
                description: "Ваши визитки — это ваше лицо! Мы предлагаем широкий выбор форматов и материалов для визиток, включая ламинирование или шелкографию. Создайте запоминающийся дизайн, который подчеркнет вашу индивидуальность. Заказывая визитки у нас, вы получаете качественный продукт, который поможет вам выделиться среди конкурентов.",
                count: 'От 48 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость за 1 штуку',
                    estimatedCostPrice: 'от 11 ₽',
                    customFields: {
                        'Тип печети': ['Цифровая (Бумага)'],
                        'Тираж': ['48-192 шт', '192-384 шт', '408-480 шт', '<504 шт'],
                        'Цвет': ['4+0', '4+4', '4+1', '1+1', '1+0'],
                        'Тип печети': ['Офсетная печать (Картон)'],
                        'Тираж': ['1000 шт', '2000 шт', '3000 шт'],
                    },
                },
                prices: [
                    imagesStore.images.busrinessCardsPrices,
                ],
                save: false
            },
            {
                id: 9,
                name: 'Листовки',
                img: imagesStore.images.leaflets,
                category: 'Футболки, текстиль',
                description: "Эффективная реклама начинается с качественных материалов! Наши листовки и буклеты помогут донести вашу информацию до клиента в ярком и доступном формате. Мы предлагаем различные форматы и виды бумаги, а также возможность печати на экологически чистых материалах. Быстрая печать и доставка — наши главные преимущества.",
                count: 'От 1000 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость',
                    estimatedCostPrice: 'от 2999 ₽',
                    customFields: {
                        'Тираж': ['1000 шт', '2000 шт', '3000 шт', '5000 шт'],
                        'Формат бумаги': ['А3', 'А4', 'А5', 'А6', 'А7', 'Эвро'],
                    },
                },
                prices: [
                    imagesStore.images.leafletsPrices,
                ],
                save: false
            },
            {
                id: 10,
                name: 'Буклеты',
                img: imagesStore.images.booklets,
                category: 'Футболки, текстиль',
                description: "Эффективная реклама начинается с качественных материалов! Наши листовки и буклеты помогут донести вашу информацию до клиента в ярком и доступном формате. Мы предлагаем различные форматы и виды бумаги, а также возможность печати на экологически чистых материалах. Быстрая печать и доставка — наши главные преимущества.",
                count: 'От 1000 шт',
                details: {
                    estimatedCostTitle: 'ориентировочная стоимость',
                    estimatedCostPrice: 'от 5590 ₽',
                    customFields: {
                        'Тираж': ['1000 шт', '3000 шт', '5000 шт'],
                        'Формат бумаги': ['А3', 'А4', 'А5', 'А6', 'Эвро'],
                    },
                },
                prices: [
                    imagesStore.images.bookletsPrices,
                ],
                save: false
            },
            {
                id: 11,
                name: 'Календари',
                img: imagesStore.images.calendars,
                category: 'Футболки, текстиль',
                description: "Создайте персонализированный календарь, который будет радовать вас весь год! Мы предлагаем множество форматов и дизайнов, а также возможность добавления ваших фотографий и логотипов. Заказывая календари у нас, вы получаете уникальный продукт, который станет отличным подарком или рекламным материалом.",
                count: 'От ? шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость',
                    estimatedCostPrice: '?? ₽',
                    customFields: {
                        'Вид календаря': ['Квартальные календари'],
                        'Вид календаря': ['Квартальный календарь А4. Без рекламного поля, без ламинирования', 'Квартальный календарь А4. Без рекламного поля, с ламинированием',
                            'Квартальный календарь А4. С рекламным полем, без ламинирования', 'Квартальный календарь А4. С рекламным полем, с ламинированием',
                            'Квартальный календарь А3. С тремя рекламными полями, без ламинирования', 'Квартальный календарь А3. С тремя рекламными полями, с ламинированием',
                            'Квартальный календарь А3. Сетка А4, без ламинирования', 'Квартальный календарь А3. Сетка А4, с ламинированием'],
                        'Тираж': ['1-10 шт', '11-50 шт', '51-100 шт', '<101 шт'],
                        'Вид календаря': ['Перекидные календари'],
                        'Вид календаря': ['Календарь перекидной, формат А4', 'Календарь перекидной, формат А3'],
                        'Тираж': ['1-10 шт/руб', '11-50 шт/руб', '51-150 шт/руб', 'больше 125 шт/руб', 'больше 250 шт/руб'],
                        'Вид календаря': ['Карманные календари'],
                        'Тираж': ['1-150 шт', '125-150 шт'],
                        'Офсет': ['1000 шт', '5000 шт', '10000 шт'],
                        'Вид календаря': ['Календари-домики'],
                        'Вид календаря': ['Календарь настольный "Домик", 3 сгиба', 'Календарь настольный "Домик", перекидной, сетка: 6 листов, 4+4',
                            'Календарь настольный "Домик", перекидной, сетка: 12 листов, 4+0'],
                        'Тираж': ['1-10 шт', '11-50 шт', '51-150 шт'],
                        'Вид календаря': ['Офсет'],
                        'Тираж': ['1000 шт'],
                    },
                },
                prices: [
                    imagesStore.images.calendarsPrices,
                ],
                save: false
            },
            {
                id: 12,
                name: 'Полноцветная лазерная печать',
                img: imagesStore.images.laserPrinting,
                category: 'Футболки, текстиль',
                description: `Наша полноцветная лазерная печать обеспечивает высокое качество изображения и яркие цвета. Идеально подходит для любых рекламных материалов, от буклетов до постеров. Мы гарантируем быструю обработку заказов и доступные цены.`,
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 23 ₽',
                    customFields: {
                        'Тираж': ['1-10 шт', '11-100 шт', '< 100 шт'],
                        'Формат бумаги': ['А3', 'А4'],
                        'Бумага для полноцветной лазерной печати': ['120 г/м', '160 г/м3', '200 г/м', '300 г/м', 'Самоклейка прозрачная', 'Самоклейка белая', 'Бумага "Лён"', 'Дизайнерския картон 250-300 г/м', 'Бумага Touch Cover', '']
                    },
                },
                prices: [
                    imagesStore.images.laserPrintingPrices,
                ],
                save: false
            },
            {
                id: 13,
                name: 'Сканирование',
                img: imagesStore.images.scanning,
                category: 'Футболки, текстиль',
                description: "Сканирование документов — это удобно и быстро! Мы предлагаем услуги сканирования различных форматов с высоким качеством изображения. Обращаясь к нам, вы можете быть уверены в безопасности ваших материалов и оперативности выполнения заказа.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 4 ₽',
                    customFields: {
                        'Формат бумаги': ['А4', 'А3', 'А2', 'А1', 'А0'],
                        'Формат сканирования': ['ЧБ', 'Цветное', 'Цв. 600 dpi'],
                    },
                },
                prices: [
                    imagesStore.images.scanningPrices,
                ],
                save: false
            },
            {
                id: 14,
                name: 'Наклейки',
                img: imagesStore.images.stickers,
                category: 'Футболки, текстиль',
                description: "Яркие наклейки — это отличный способ привлечь внимание к вашему бренду! Мы предлагаем печать наклеек любых форматов с индивидуальным дизайном. Высокое качество материалов и быстрое выполнение заказа делают нас вашим надежным партнером.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 300 ₽',
                    customFields: {
                        'Качестов печати': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Вид наклейки': ['Самоклеящаяся плёнка', 'Самоклеящаяся плёнка + резка по контуру'],
                    },
                },
                prices: [
                    imagesStore.images.stickersPrices,
                ],
                save: false
            },
            {
                id: 15,
                name: 'Плоттерная резка',
                img: imagesStore.images.plotterCutting,
                category: 'Футболки, текстиль',
                description: "Плоттерная резка — это идеальное решение для создания уникальных рекламных материалов. Мы предлагаем резку на виниловой самоклеящейся пленке по вашим индивидуальным размерам и формам. Обращаясь к нам, вы получаете высокое качество исполнения и оперативность.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 300 ₽',
                    customFields: {
                        'Формат (средняя высота символа)': ['> 1 cм', '1-5 см', '<5 см'],
                    },
                },
                prices: [
                    imagesStore.images.plotterCuttingPrices,
                ],
                save: false
            },
            {
                id: 16,
                name: 'Тиражирование',
                img: imagesStore.images.replication,
                category: 'Футболки, текстиль',
                description: `Нужны большие тиражи? Мы готовы помочь! Наша типография предлагает услуги тиражирования с гарантией качества. Быстрая обработка заказов и доступные цены делают нас идеальным выбором для вашего бизнеса.`,
                count: 'От 100 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 2,2 ₽',
                    customFields: {
                        'Бланки строгой отчетности': [],
                        'A4 1+0': ['100 шт', '200 шт', '300 шт', '500 шт', '1000 шт'],
                        'A5 1+0': ['200 шт', '400 шт', '600 шт', '1000 шт', '2000 шт'],
                        'A6 1+0': ['400 шт', '800 шт', '1200 шт', '2000 шт', '4000 шт'],
                        'Колличество слоев': ['2 слоя', '3 слоя'],
                        'Тиражирование': [],
                        'Цвет': ['Чёрный', 'Красный, снинй, зелёный'],
                        'Колличество копий с 1 оригинала': ['100 шт', '200 шт', '300 шт', '500 шт', '1000 шт', '5000 шт', '10000 шт'],
                        'Вид бумаги': [],
                        'Формат бумаги': ['А4', 'А3'],

                    },
                },
                prices: [
                    imagesStore.images.replicationPrices,
                ],
                save: false
            },
            {
                id: 17,
                name: 'Блокноты',
                img: imagesStore.images.notebooks,
                category: 'Футболки, текстиль',
                description: "Создайте стильный блокнот на пружине с вашим дизайном! Мы предлагаем различные форматы и виды бумаги. Это отличный подарок для сотрудников или клиентов. Заказывая блокноты у нас, вы получаете высокое качество печати и быструю доставку.",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'ориентировачная стоимость за штуку',
                    estimatedCostPrice: 'от 150 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.notebooksPrices,
                ],
                save: false
            },
            {
                id: 18,
                name: 'Постеры',
                img: imagesStore.images.t_shirt,
                category: 'Футболки, текстиль',
                description: "Наши постеры помогут вам выразить свои идеи ярко и запоминающе! Мы используем качественные материалы для печати, что обеспечивает насыщенные цвета и долговечность. Заказывая постеры у нас, вы получаете профессиональное исполнение вашего проекта.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 60 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Материал': ['Бумага постерная', 'Фото бумага (матовая и глянцевая)'],
                        "Качество": ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Резка изобрежений в край': []
                    },
                },
                prices: [
                    imagesStore.images.postersPrices,
                ],
                save: false
            },
            {
                id: 19,
                name: 'Баннеры',
                img: imagesStore.images.t_shirt,
                category: 'Прочее',
                description: "Ищете способ привлечь внимание? Наши баннеры и штендеры идеально подходят для рекламы на мероприятиях или в магазинах. Мы предлагаем различные размеры и материалы, а также возможность индивидуального дизайна. Высокое качество печати гарантировано!",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 600 ₽',
                    customFields: {
                        'Эко-сольвентная печать до 1,5м': [],
                        'Материал': ['Баннер, Корея 440 г/м2', 'Баннер, Литой 510 г/м2'],
                        'Качестов': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Эко-сольвентная печать до 3м': [],
                        'Материал': ['Баннер, Китая 440 г/м2', 'Баннер, Литой 510 г/м2'],
                        'Качестов': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                        'Прочие работы': ['Люверсовка', 'Проклейка края', 'Люверс', 'Проклейка края "Карман"']
                    },
                },
                prices: [
                    imagesStore.images.bannersPrices,
                ],
                save: false
            },
            {
                id: 20,
                name: 'Штендер',
                img: imagesStore.images.t_shirt,
                category: 'Прочее',
                description: "Ищете способ привлечь внимание? Наши баннеры и штендеры идеально подходят для рекламы на мероприятиях или в магазинах. Мы предлагаем различные размеры и материалы, а также возможность индивидуального дизайна. Высокое качество печати гарантировано!",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориентировачная стоимостьза штуку',
                    estimatedCostPrice: 'от 7300 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                    },
                },
                prices: [
                    imagesStore.images.standerPrices,
                ],
                save: false
            },
            {
                id: 21,
                name: 'Roll-up',
                img: imagesStore.images.RollUp,
                category: 'Прочее',
                description: "Roll-up — это удобное решение для презентаций и выставок! Легкий и компактный, он легко транспортируется и устанавливается. Заказывая roll-up у нас, вы получаете качественную печать и возможность создания индивидуального дизайна.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 6435 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Материал': ['Roll-up (печать на баннере, без констукции)', 'Roll-up (печать на плёнке)'],
                        'Качество': ['360 dpi', '540 dpi', '720 dpi', '1440 dpi'],
                    },
                },
                prices: [
                    imagesStore.images.Roll_upPrices,
                ],
                save: false
            },
            {
                id: 22,
                name: 'Пластиковые карты',
                img: imagesStore.images.plasticCards,
                category: 'Прочее',
                description: "Создайте уникальные пластиковые карты для вашего бизнеса! Мы предлагаем различные форматы и варианты отделки, включая разные фактуры и эмбоссирование. Высокое качество материалов гарантирует долговечность ваших карт.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 75 ₽',
                    customFields: {
                        'Тираж': ['50-99 шт', '100-299 шт', '300-499 шт', '500-999 шт', '1000-2999 шт', '3000-4999 шт', 'от 5000 шт'],
                        'Дополнительные услуги': ['Магнитная полоса+кодирование', 'Эмбосирование + типирование (за надпись)',
                            'Цветной пластик + (золото, серебро, перламутр)', 'Прозрачный пластик', 'Фактурные карты',
                            'Резные карты', 'Скретч-панель', 'Полоса для подписи'],
                        'Тираж дополнительных услуг': ['50-499 шт', '500-4999 шт']
                    },
                },
                prices: [
                    imagesStore.images.plasticCardsPrices,
                ],
                save: false
            },
            {
                id: 23,
                name: 'Изготовление планшетов, табличек, стендов',
                img: imagesStore.images.t_shirt,
                category: 'Прочее',
                description: "Мы предлагаем услуги по изготовлению планшетов, табличек из ПВХ пластика. Это идеальное решение для оформления офисов или выставок. Высокое качество исполнения и индивидуальный подход к каждому заказу — наши главные преимущества.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'за штуку',
                    estimatedCostPrice: 'от 316 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт'],
                        'Вид материала': ['Пластик ПХ (2х2 м)', 'Пенакартон (1х1,40 м )', 'Кармашки (прозрачный пластик)',],
                        'Толщина материала': ['3/5 мм', '3 мм', '5 мм', 'А3', 'А4', 'А5', 'под визитки',]
                    },
                },
                prices: [
                    imagesStore.images.makingPrices,
                ],
                save: false
            },

            {
                id: 24,
                name: 'Пакеты ПВД',
                img: imagesStore.images.packages,
                category: 'Прочее',
                description: "Экологичные пакеты ПВД — это удобный способ упаковки товаров! Мы предлагаем различные размеры и возможность нанесения логотипа. Заказывая пакеты у нас, вы поддерживаете экологические инициативы и получаете качественный продукт.",
                count: 'От ? шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость',
                    estimatedCostPrice: '?? ₽',
                    customFields: {
                        'Тираж': ['50 шт', '100 шт', '150 шт', '200 шт', '300 шт', '400 шт', '500 шт', '1000 шт'],
                        'Что-то': ['1+0', '2+0', '1+1', '3+0', '2+1', '4+0', '3+1', '2+2']
                    },
                },
                prices: [
                    imagesStore.images.packagesPrices,
                ],
                save: false
            },
            {
                id: 25,
                name: 'Кружки',
                img: imagesStore.images.mugs,
                category: 'Прочее',
                description: "Персонализированные кружки — это отличный подарок или рекламный материал! Мы предлагаем печать на кружках с вашим дизайном или логотипом. Высокое качество печати гарантировано!",
                count: 'От 1 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 350 ₽',
                    customFields: {
                        'Тираж': ['от 1 шт', 'от 10 шт', 'от 20 шт'],
                        'Наименовения': ['Кружка стандартная (белая внутри и снаружи)', 'Кружка цветная внутри', 'Кружка цветная внутри+ручка',
                            'Кружка цветная ручка+каемка', 'Кружка цветная с ложкой', 'Кружка цветная снаружи (розовая, серебро, золото)',
                            'Кружка кофейная + ложка и блюдце', 'Кружка-хамелеон', 'Термо автомобильная кружка', 'Термостакан с полиграфической вставкой'],
                    },
                },
                prices: [
                    imagesStore.images.mugsPrices,
                ],
                save: false
            },
            {
                id: 26,
                name: 'Силиконовые браслеты',
                img: imagesStore.images.siliconeBracelets,
                category: 'Прочее',
                description: "Силиконовые браслеты — это модный аксессуар для мероприятий или акций! Мы предлагаем разнообразные цвета и возможность нанесения текста или логотипа. Заказывая браслеты у нас, вы получаете качественный продукт по доступной цене.",
                count: 'От 100 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 65 ₽',
                    customFields: {
                        'Тираж': ['100 шт', '200 шт', '300 шт', '500 шт', '1000 шт', '3000 шт', '5000 шт', '10000 шт'],
                        'Виды': ['С логотипом. Круговая шелкография', 'С выдавленным и прокрашенным логотипом', 'Сегментированные с логотипом. Круговая шелкография',
                            'Двухсторонние с логотипом. Круговая шелкография', 'С нумерацией', 'С вдавленным/выпуклым логотипом', 'С вдавленным прокрашиным логотипом'],
                    },
                },
                prices: [
                    imagesStore.images.siliconeBraceletsPrices,
                ],
                save: false
            },
            {
                id: 27,
                name: 'Закатные экспресс-значки',
                img: imagesStore.images.badges,
                category: 'Прочее',
                description: "Создайте уникальные значки для мероприятий или акций! Наши закатные значки легко носить и они привлекают внимание. Быстрое изготовление и возможность индивидуального дизайна делают нас вашим надежным партнером.",
                count: 'От 10 шт',
                details: {
                    estimatedCostTitle: 'ориент. стоимость за штуку (37мм диаметр)',
                    estimatedCostPrice: 'от 85 ₽',
                    customFields: {
                        'Тираж': ['от 10 шт', '10-99 шт', '100 шт', '200 шт', '300 шт', '600 шт', '800 шт', '1000 шт', '5000 шт'],
                        'Диамерт': ['37 мм', '58 мм'],
                    },
                },
                prices: [
                    imagesStore.images.badgesPrices,
                ],
                save: false
            },
            {
                id: 28,
                name: 'Струйная печать фотографий',
                img: imagesStore.images.studioPhotoPrinting,
                category: 'Прочее',
                description: "Получите высококачественные фотографии с нашей студийной печатью! Мы используем современные технологии для достижения насыщенных цветов и детализации. Быстрая обработка заказов гарантирована!",
                count: 'От ? шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость',
                    estimatedCostPrice: '?? ₽',
                    customFields: {
                        'Тираж': ['1-11 шт', '<11'],
                        'Формат': ['10х15 (1-11 шт)', '10х15(<11 шт)', '13х18', '15х20', '20х30', '3х4'],
                    },
                },
                prices: [
                    imagesStore.images.studioPhotoPrintingPrices,
                ],
                save: false
            },
            {
                id: 29,
                name: 'Диски',
                img: imagesStore.images.disks,
                category: 'Прочее',
                description: "Ищете надежное решение для хранения данных? Наши диски обеспечивают высокое качество записи и долговечность.",
                count: 'От 100 шт',
                details: {
                    estimatedCostTitle: 'Ориентировочная стоимость за штуку',
                    estimatedCostPrice: 'от 40 ₽',
                    customFields: {
                        'Тираж': ['1-10 шт', '11-100 шт', '<100 шт'],
                        'Запись на носитель': ['CD-R', 'DVD-R', 'Мини-диск'],
                    },
                },
                prices: [
                    imagesStore.images.disksPrices,
                ],
                save: false
            },
        ]
    }},
    actions: {
        toggleSave(productId) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                product.save = !product.save;
                this.updateLocalStorage();
            }
        },
        updateLocalStorage() {
            localStorage.setItem('products', JSON.stringify(this.products));
        },
        // Метод для инициализации данных из локального хранилища
        loadFromLocalStorage() {
            const savedProducts = localStorage.getItem('products');
            if (savedProducts) {
                this.products = JSON.parse(savedProducts);
            }
        },
    },
    created() {
        this.loadFromLocalStorage();
    }
})
