import React from "react";

class Info extends React.Component {
  render() {
    return (
      <div className="Info">
        <ul>
          <li>
            <span>Ступінь школи:</span>
            <span> I-II</span>
          </li>
          <li>
            <span>Тип школи:</span>
            <span> загальноосвітня школа</span>
          </li>
          <li>
            <span>Адрес школи:</span>
            <span>
              вул. Шкільна, 11, Одринки, Сарненський район, Рівненська область,
              34532
            </span>
          </li>
          <li>
            <span>E-mail:</span>
            <span> znz_odrunku11@ukr.net</span>
          </li>
          <li>
            <span>Статус школи:</span>
            <span> Не опорна</span>
          </li>
          <li>
            <span>Профіль школи:</span>
            <span> універсальний</span>
          </li>
          <li>
            <span>Підпорядкування школи:</span>
            <span>
              Відділ освіти,молоді та спорту Сарненської райдержадміністрації
            </span>
          </li>
          <li>
            <span>Форма власності:</span>
            <span> комунальна</span>
          </li>
          <li>
            <span>Мова навчання у школі:</span>
            <span> українська</span>
          </li>
          <li>
            <span>Іноземні мови у школі:</span>
            <span> англійська</span>
          </li>
          <li>
            <span>Розташування школи:</span>
            <span> Сарненський район</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Info;
