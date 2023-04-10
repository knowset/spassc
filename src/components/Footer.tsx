import React from "react";
import { Layout } from "./Layout";

export const Footer: React.FC = () => {
    return (
        <div className="t-bg-zinc-900">
        <Layout>
            <div className="t-flex t-flex-col t-gap-4 t-p-2 t-text-white t-text-base">
                <div className="t-grid t-grid-cols-1 sm:t-grid-cols-2 t-gap-4">
                    <div className="t-w-full t-bg-zinc-700 t-shadow-2xl t-rounded-md t-py-1 t-px-2">
                        <h1 className="t-font-bold">Контакты</h1>
                        <p>160000, Вологодская область, г. Вологда, ул. Ленина, 15</p>
                        <p><span className="t-font-bold">Телефон:</span> (8172) 72-46-45</p>
                        <p><span className="t-font-bold">Email:</span> kanz@vogu35.ru</p>
                    </div>
                    <div className="t-grid t-grid-cols-1 xs:t-grid-cols-2 xs:t-grid-rows-2 t-gap-2">
                        <div className="t-w-full t-bg-zinc-700 t-shadow-2xl t-rounded-md t-py-1 t-px-2">
                            <p className="t-font-bold">Канцелярия</p>
                            <p>(8172)72-50-33, ф. 72-45-62</p>
                            <p>kanz@vogu35.ru</p>
                        </div>
                        <div className="t-w-full t-bg-zinc-700 t-shadow-2xl t-rounded-md t-py-1 t-px-2">
                            <p className="t-font-bold">Канцелярия</p>
                            <p>(8172)72-50-33, ф. 72-45-62</p>
                            <p>kanz@vogu35.ru</p>
                        </div>
                        <div className="t-w-full t-bg-zinc-700 t-shadow-2xl t-rounded-md t-py-1 t-px-2">
                            <p className="t-font-bold">Канцелярия</p>
                            <p>(8172)72-50-33, ф. 72-45-62</p>
                            <p>kanz@vogu35.ru</p>
                        </div>
                        <div className="t-w-full t-bg-zinc-700 t-shadow-2xl t-rounded-md t-py-1 t-px-2">
                            <p className="t-font-bold">Канцелярия</p>
                            <p>(8172)72-50-33, ф. 72-45-62</p>
                            <p>kanz@vogu35.ru</p>
                        </div>
                    </div>
                </div>
                <div className="t-w-full t-bg-zinc-700 t-shadow-2xl t-rounded-md t-py-1 t-px-2">
                    <p><span className="t-font-bold">Copyright ©</span> При использовании любых материалов официального сайта ВоГУ ссылка на сайт обязательна</p>
                    <p>Все публикуемые на официальном сайте ВоГУ фото- и видеоматериалы размещены с согласия обучающихся, работников и сторонних лиц, принимающих участие в мероприятиях, организуемых университетом</p>
                </div>
            </div>
        </Layout>
        </div>
    );
}