import React from "react";
import { Layout } from "./Layout";

export const Footer: React.FC = () => {
    return (
        <div className="bg-zinc-900">
        <Layout>
            <div className="flex flex-col gap-4 p-2 text-white text-base">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="w-full bg-zinc-700 shadow-2xl rounded-md py-1 px-2">
                        <h1 className="font-bold">Контакты</h1>
                        <p>160000, Вологодская область, г. Вологда, ул. Ленина, 15</p>
                        <p><span className="font-bold">Телефон:</span> (8172) 72-46-45</p>
                        <p><span className="font-bold">Email:</span> kanz@vogu35.ru</p>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 gap-2">
                        <div className="w-full bg-zinc-700 shadow-2xl rounded-md py-1 px-2">
                            <p className="font-bold">Канцелярия</p>
                            <p>(8172)72-50-33, ф. 72-45-62</p>
                            <p>kanz@vogu35.ru</p>
                        </div>
                        <div className="w-full bg-zinc-700 shadow-2xl rounded-md py-1 px-2">
                            <p className="font-bold">Канцелярия</p>
                            <p>(8172)72-50-33, ф. 72-45-62</p>
                            <p>kanz@vogu35.ru</p>
                        </div>
                        <div className="w-full bg-zinc-700 shadow-2xl rounded-md py-1 px-2">
                            <p className="font-bold">Канцелярия</p>
                            <p>(8172)72-50-33, ф. 72-45-62</p>
                            <p>kanz@vogu35.ru</p>
                        </div>
                        <div className="w-full bg-zinc-700 shadow-2xl rounded-md py-1 px-2">
                            <p className="font-bold">Канцелярия</p>
                            <p>(8172)72-50-33, ф. 72-45-62</p>
                            <p>kanz@vogu35.ru</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-zinc-700 shadow-2xl rounded-md py-1 px-2">
                    <p><span className="font-bold">Copyright ©</span> При использовании любых материалов официального сайта ВоГУ ссылка на сайт обязательна</p>
                    <p>Все публикуемые на официальном сайте ВоГУ фото- и видеоматериалы размещены с согласия обучающихся, работников и сторонних лиц, принимающих участие в мероприятиях, организуемых университетом</p>
                </div>
            </div>
        </Layout>
        </div>
    );
}