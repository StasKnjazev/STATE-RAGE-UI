
import React from 'react';
import PieMenu, { PieCenter, Slice } from 'react-pie-menu';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillAlt,
  faVenusMars,
  faLocationArrow,
  faArrowLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import * as styles from './PreferenceSelector.style';
import IconClose from './icons/close.svg'


const theme = {
  pieMenu: {
    container: styles.container,
    center: styles.center,
  },
  slice: {
    container: styles.slice,
  },
};

const INITIAL = 0;
const PAYMENT = 1;
const GENDERS = 2;
const LOCATIONS = 3;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      choice: 'init',
      currentData: {},
      history: ['init'],
      choiceData: [
        {
            id   : 'do',
            title: 'Действия',
            icon: 'close',
            items: [
                {
                    id   : 'giveMoney',
                    icon: 'close',
                    title: 'Передать'
                },
                {
                    id   : 'friend',
                    icon : 'close',
                    title: 'Знакомство'
                },
                {
                    id   : 'uncuff',
                    title: 'Снять',
                    icon: 'close'
                },
                {
                    id   : 'cuff',
                    title: 'Надеть',
                    icon: 'close'
                },
                {
                    id   : 'inCar',
                    title: 'Затащить',
                    icon: 'close'
                },
                {
                    id   : 'outCar',
                    title: 'Вытащить',
                    icon: 'close'
                },
                {
                    id   : 'more',
                    icon : '#more',
                    title: 'Еще',
                    items: [
                        {
                            id   : 'takeGun',
                            icon: 'close',
                            title: 'Изъять оружие'
                        },
                        {
                            id   : 'takeMask',
                            title: 'Снять маску',
                            icon: 'close'
                        },
                        {
                            id   : 'followUs',
                            icon : 'close',
                            title: 'Вести за собой'
                        },
                        {
                            id   : 'frisk',
                            icon : 'close',
                            title: 'Обыск'
                        }
                    ]
                }
            ]
        },
        {
            id   : 'run',
            icon   : 'close',
            title: 'Документы',
            items: [
                {
                    id   : 'showGosDoc',
                    title: 'Удостоверение'
                },
                {
                    id   : 'showCardId',
                    title: 'Паспорт'
                },
                {
                    id   : 'showLic',
                    title: 'Лицензии'
                }
            ]
        },
        {
            id   : 'home',
            title: 'Главная',
            icon: 'close',
            items: [
                {
                    id   : 'report',
                    icon   : 'close',
                    title: 'Жалоба'
                },
                {
                    id   : 'ask',
                    icon   : 'close',
                    title: 'Вопрос'
                },
                {
                    id   : 'faq',
                    icon   : 'close',
                    title: 'Справка'
                },
                {
                    id   : 'settings',
                    icon   : 'close',
                    title: 'Настройки'
                }
            ]
        },
        {
            id   : 'carMenu',
            title: 'Транспорт',
            icon: 'close',
            items: [
                {
                    id   : 'leftIndicator',
                    icon   : 'close',
                    title: 'Поворотник'
                },
                {
                    id   : 'lockV',
                    icon   : 'close',
                    title: 'Открыть / Закрыть'
                },
                {
                    id   : 'rightIndicator',
                    icon   : 'close',
                    title: 'Поворотник'
                },
                {
                    id   : 'twoIndicator',
                    icon   : 'close',
                    title: 'Аварийка'
                },
            ]
        },
        {
            id   : 'anim',
            title: 'Анимации',
            icon: 'close',
            items: [
                {
                    id   : 'animDo',
                    title: 'Действия',
                    items: [
                        {
                            id   : 'animDo1',
                            title: 'Поднять руки'
                        },
                        {
                            id   : 'animDo2',
                            title: 'Воен. приветсвие'
                        },
                        {
                            id   : 'animDo3',
                            title: 'Согласиться'
                        },
                        {
                            id   : 'animDo4',
                            title: 'Отказать'
                        },
                        {
                            id   : 'animDo5',
                            title: 'Рука на кобуре'
                        },
                    ]
                },
                {
                    id   : 'animPose',
                    title: 'Позирующие',
                    items: [
                        {
                            id   : 'animPose1',
                            title: 'Распальцовка'
                        },
                        {
                            id   : 'animPose2',
                            title: 'Руки в боки'
                        },
                        {
                            id   : 'animPose3',
                            title: 'Охранник'
                        },
                        {
                            id   : 'animPose4',
                            title: 'Размяться'
                        },
                        {
                            id   : 'animPose5',
                            title: 'Лечь'
                        },
                    ]
                },
                {
                    id   : 'animEmoji',
                    title: 'Эмоции',
                    items: [
                        {
                            id   : 'animEmoji1',
                            title: 'Радоваться'
                        },
                        {
                            id   : 'animEmoji2',
                            title: 'Поддержать'
                        },
                        {
                            id   : 'animEmoji3',
                            title: 'Уважение'
                        },
                        {
                            id   : 'animEmoji4',
                            title: 'Разочароваться'
                        },
                        {
                            id   : 'animEmoji5',
                            title: 'Дурак'
                        },
                    ]
                },
                {
                    id   : 'animDance',
                    title: 'Танцы',
                    items: [
                        {
                            id   : 'animDance1',
                            title: 'Танец-1'
                        },
                        {
                            id   : 'animDance2',
                            title: 'Танец-2'
                        },
                        {
                            id   : 'animDance3',
                            title: 'Танец-3'
                        },
                        {
                            id   : 'animDance4',
                            title: 'Танец-4'
                        },
                        {
                            id   : 'animDance5',
                            title: 'Танец-5'
                        },
                        {
                            id   : 'animDance6',
                            title: 'Танец-6'
                        },
                        {
                            id   : 'animDance7',
                            title: 'Танец-7'
                        },
                        {
                            id   : 'animDance8',
                            title: 'Танец-8'
                        }
                    ]
                },
                {
                    id   : 'animDoPlayer',
                    title: 'С игроком',
                    items: [
                        {
                            id   : 'animDoPlayer4',
                            title: 'Поцелуй'
                        },
                        {
                            id   : 'animDoPlayer1',
                            title: 'Подзороваться 1'
                        },
                        {
                            id   : 'animDoPlayer3',
                            title: 'Дать пять'
                        },
                        {
                            id   : 'animDoPlayer2',
                            title: 'Подзороваться 2'
                        },
                    ]
                },
                {
                    id   : 'animAll',
                    title: 'Все анимации'
                },
                {
                    id   : 'animStop',
                    title: 'Остановить'
                }
            ]
        },
        {
            id: 'donate',
            title: 'Донат',
            icon: 'close'
        },
        {
            id: 'gps',
            title: 'GPS',
            icon: 'close'
        }
    ]
    };
  }

  showPayments = () => {
    this.setState({ choice: PAYMENT });
  }

  selectPayment = paymentOption => () => {
    this.setState({ paymentOption });
  }

  showGenders = () => {
    this.setState({ choice: GENDERS });
  }

  selectGender = gender => () => {
    this.setState({ gender });
  }

  showLocations = () => {
    this.setState({ choice: LOCATIONS });
  }

  selectLocation = location => () => {
    this.setState({ location });
  }

  goBack = () => {
    this.setState({ choice: this.findParent(this.state.choice) || 'init' })
  }

  getItemsById = (array, value) => {
    /*if (this.state.choice !== 'init') {
      let result = null

      if (array.items) {
        const deep = array.items.find(x => x.id === value)
        if (deep.items) {
          return deep.items
        }
      }

      return result
    } else {
      return this.state.choiceData.find(x => x.id === value)
    }*/
  }

  radialSelectiItem = (value) => {
    if (value.items) {
      this.setState({ choice: value.id })
      /*this.setState((state) => (
        {history: state.history.push(value)}
      ))*/
    }
    console.log('you clicked: ' + value.id)
  }

  

  findParent = (value) => {
    let parent = ''
    let result

    for (let i = 0; i < this.state.choiceData.length; i++) {
      let el = this.state.choiceData[i]
      parent = el.id
      if (el.items) {
        result = el.items.find(x => x.id === value)
        if (result) {
          //console.log(this.state.choiceData.find(x => x.id === parent).items.find(x => x.id === this.state.choice).items)
          return parent
        }
      }
    }
  }

  render() {
    const Center = props => (
      <React.Fragment>
        {this.state.choice !== 'init' && (
          <PieCenter {...props} onClick={this.goBack}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </PieCenter>
        )}
        {this.state.choice === 'init' && (
          <PieCenter {...props} onClick={() => this.setState({ show: false })}>
            <div className="radialmenu__center__container">
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </div>
          </PieCenter>
        )}
      </React.Fragment>
    );

    if (!this.state.show) {
      return null
    }


    return (
      <div className="radialmenu__container">
        <ThemeProvider theme={theme}>
          <PieMenu radius="340px" centerRadius="60px" Center={Center}>
            {this.state.choice === 'init' ? (
              <React.Fragment>
                {this.state.choiceData.map((item, index) => (
                  <Slice onSelect={() => this.radialSelectiItem(item)}>
                    <div key={`radialmenu__slice-${index}`}>
                      {item.icon && <img src={IconClose} width="32px" />}
                      <p className="radialmenu__slice__title">
                        {item.title}
                      </p>
                    </div>
                  </Slice>
                ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {this.state.choiceData.find(x => x.id === this.state.choice) ? (
                  this.state.choiceData.find(x => x.id === this.state.choice).items.map((item, index) => (
                    <Slice onSelect={() => this.radialSelectiItem(item)}>
                      <div key={`radialmenu__slice-${item.id}`}>
                        {item.icon && <img src={IconClose} width="32px" />}
                        <p className="radialmenu__slice__title">
                          {item.title}
                        </p>
                      </div>
                    </Slice>
                  ))
                  ) : (
                    this.state.choiceData.find(x => x.id === this.findParent(this.state.choice)).items.find(x => x.id === this.state.choice).items.map((item, index) => (
                      <Slice onSelect={() => this.radialSelectiItem(item)}>
                        <div key={`radialmenu__slice-${item.id}`}>
                          {item.icon && <img src={IconClose} width="32px" />}
                          <p className="radialmenu__slice__title">
                            {item.title}
                          </p>
                        </div>
                      </Slice>
                    ))
                  )
                }
              </React.Fragment>
            )}
          </PieMenu>
        </ThemeProvider>
      </div>
    );
  }
}