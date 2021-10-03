import React from 'react';
import styles from "./Article.module.css"
import CompClubThree from './CompClubThree.jpg'
import { useHistory } from 'react-router'

function ArticleThree(props) {
  const history = useHistory()
  return (
    <div className={styles.container}>
      <div className={styles.article}>
        <div>
          <h1>Особенности работы кибер клуба</h1>
        </div>
        <div>
          <img src={CompClubThree} alt="" />
        </div>
        <div>
          <p>Специальный кибер клуб предлагает множество доступных развлечений и готов принять большую аудиторию за счёт применения нового оборудования и уникальных наработок. Основная сфера заведения коснулась обеспечения комфортной игры для тех юзеров, которые всерьёз увлекаются киберспортивными дисциплинами. Им обязательно приглянется стильное оформление наличие дополнительных удобств в непосредственной близости. Тем более, подобное заведение отлично справляется с потоком молодых людей, активных геймеров.</p>
          <p><b>Почему стоит выбрать кибер клуб рядом?</b></p>
          <p> Если делать сравнение современного кибер клуба и обычного компьютерного клуба, то выходит, что кибер салон довольно выгодно выигрывает на фоне просто заведения. Дело в том, что новое оснащение позволило запросто собирать в стенах такого заведения любителей активных киберспортивных дисциплин, которые желают наслаждаться любимыми поединками или самостоятельно участвовать в разных категориях игр. Для игроков установлена вся необходимая атрибутика - новейшее ПО, джойстики, а также аудио гарнитура и вспомогательные программы, которые заметно ускоряют процесс игры, помогают сделать ее более интересной и насыщенной.</p>
          <p>Обычные компьютерные клубы зачастую выполняют роль заведений, в котором приятно провести время смогут только школьники. Практически всегда в обычных заведениях не обновляется устаревший софт, а поиск новых развлечений заметно растягивается по времени. К тому же, игроки не всегда могут в полной мере насладиться процессом по причине того, что игровые места не обеспечены необходимыми дополнениями. Компьютерные клубы често используются в качестве заведений, при помощи которых пользователь может получить необходимые данные. В это же время, кибер клуб способен помочь игроку увлечься тем или иным процессом. Доступные услуги кибер клуба более обширна по своему функционалу. Здесь же нередко проходят масштабные соревнования, игры и турниры по популярным дисциплинам.</p>
          <p>Высокий рейтинг кибер клуба способен предоставить активным игрокам следующие преимущества:</p>
          <ul>
            <li>большое разнообразие доступных игр;</li>
            <li>полноценное техническое оснащение;</li>
            <li>все ПК проходят периодическое обслуживание, на них имеется свежих софт;</li>
            <li>возможность получения бесплатных консультаций при необходимости.</li>
          </ul>
          <p>Разумеется, посетить киберспортивный салон сумеет запросто любой желающий пользователь.</p>
        </div>
        <div className={styles.buttonFlex}>
        <button onClick={() => history.goBack()}>Назад!</button>
        </div>
      </div>
    </div>
  );
}

export default ArticleThree;