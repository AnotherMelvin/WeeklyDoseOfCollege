import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";

import logo from '../assets/logo.png';
import rain from '../assets/rain.gif';

import eatIcon from '../assets/icon/eat.png';
import playIcon from '../assets/icon/play.png';
import workIcon from '../assets/icon/work.png';
import sleepIcon from '../assets/icon/sleep.png';
import studyIcon from '../assets/icon/study.png';
import stockIcon from '../assets/icon/stock.png';
import moneyIcon from '../assets/icon/money.png';
import warningIcon from '../assets/icon/warning.png';
import sunIcon from '../assets/icon/sunny.png';
import cloudIcon from '../assets/icon/cloudy.png';
import rainIcon from '../assets/icon/rainy.png';

import avatar1 from '../avatar/Steve_Idle.png';
import avatar1Eat from '../avatar/Steve_Eat.png';
import avatar1Play from '../avatar/Steve_Play.png';
import avatar1Work from '../avatar/Steve_Work.png';
import avatar1Sleep from '../avatar/Steve_Sleep.png';
import avatar1Study from '../avatar/Steve_Study.png';

import avatar2 from '../avatar/Alex_Idle.png';
import avatar2Eat from '../avatar/Alex_Eat.png';
import avatar2Play from '../avatar/Alex_Play.png';
import avatar2Work from '../avatar/Alex_Work.png';
import avatar2Sleep from '../avatar/Alex_Sleep.png';
import avatar2Study from '../avatar/Alex_Study.png';

import home from '../assets/place/house.jpg';
import school from '../assets/place/school.jpg';
import classroom from '../assets/place/class.jpg';
import canteen from '../assets/place/canteen.jpg';
import library from '../assets/place/library.jpg';
import gym from '../assets/place/gym.jpg';
import supermarket from '../assets/place/supermarket.jpg';

import morning from '../assets/time/morning.jpg';
import afternoon from '../assets/time/afternoon.jpg';
import evening from '../assets/time/evening.jpg';
import night from '../assets/time/night.jpg';

function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

export default function Game(props) {
  const [requestWeather, setRequestWeather] = useState(null);
  const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=-6.257566&lon=106.618279&appid=1e6e9c1cbcfbf403f2f0122187c433fc&units=metric";
  const newsURL = "https://newsapi.org/v2/top-headlines?country=id&apiKey=74b4aa16a928418bab13cebafb9aa8e5";

  useEffect(() => {
    Axios.get(weatherURL).then((response) => {
      setRequestWeather(response.data);
    });
  }, [])
  
  const major = props.major;
  const [study, setStudy] = useState(0);
  const [eat, setEat] = useState(50);
  const [play, setPlay] = useState(50);
  const [work, setWork] = useState(50);
  const [sleep, setSleep] = useState(50);
  const [stock, setStock] = useState(50);
  const [money, setMoney] = useState(100);
  const [warning, setWarning] = useState(0);

  const barColor = [
    "progress-bar bg-danger",
    "progress-bar bg-warning",
    "progress-bar",
    "progress-bar bg-success"
  ]
  const [eatColor, setEatColor] = useState(1);
  const [playColor, setPlayColor] = useState(1);
  const [workColor, setWorkColor] = useState(1);
  const [sleepColor, setSleepColor] = useState(1);
  const [stockColor, setStockColor] = useState(1);
  const [moneyColor, setMoneyColor] = useState(3);
  const [warningColor, setWarningColor] = useState(2);

  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (study > 100) setStudy(100);
  }, [study]);

  useEffect(() => {
    if (eat > 100) setEat(100);
    else if (eat < 0) setEat(0);

    if (eat < 25) {
      setEatColor(0);
    } else if (eat > 25 && eat < 50) {
      setEatColor(1);
    } else if (eat > 50 && eat < 75) {
      setEatColor(2);
    } else if (eat > 75) {
      setEatColor(3);
    }

    if (eat == 0) {
      setMessage("You are starving heavily!");
      setTimeout(() => {
          props.changePage(3);
          props.end(0);
      }, 2000);
    }
  }, [eat]);

  useEffect(() => {
    if (play > 100) setPlay(100);
    else if (play < 0) setPlay(0);

    if (play < 25) {
      setPlayColor(0);
    } else if (play > 25 && play < 50) {
      setPlayColor(1);
    } else if (play > 50 && play < 75) {
      setPlayColor(2);
    } else if (play > 75) {
      setPlayColor(3);
    }

    if (play == 0) {
      setMessage("You are stressed so badly!");
      setTimeout(() => {
          props.changePage(3);
          props.end(0);
      }, 2000);
    }
  }, [play]);

  useEffect(() => {
    if (work > 100) setWork(100);
    else if (work < 0) setWork(0);

    if (work < 25) {
      setWorkColor(0);
    } else if (work > 25 && work < 50) {
      setWorkColor(1);
    } else if (work > 50 && work < 75) {
      setWorkColor(2);
    } else if (work > 75) {
      setWorkColor(3);
    }

    if (work == 0) {
      setMessage("Your health is at critical level!");
      setTimeout(() => {
          props.changePage(3);
          props.end(0);
      }, 2000);
    }
  }, [work]);

  useEffect(() => {
    if (sleep > 100) setSleep(100);
    else if (sleep < 0) setSleep(0);

    if (sleep < 25) {
      setSleepColor(0);
    } else if (sleep > 25 && sleep < 50) {
      setSleepColor(1);
    } else if (sleep > 50 && sleep < 75) {
      setSleepColor(2);
    } else if (sleep > 75) {
      setSleepColor(3);
    }

    if (sleep == 0) {
      setMessage("Your body is really tired!");
      setTimeout(() => {
          props.changePage(3);
          props.end(0);
      }, 2000);
    }
  }, [sleep]);

  useEffect(() => {
    if (stock > 100) setStock(100);
    else if (stock < 0) setStock(0);

    if (stock < 25) {
      setStockColor(0);
    } else if (stock > 25 && stock < 50) {
      setStockColor(1);
    } else if (stock > 50 && stock < 75) {
      setStockColor(2);
    } else if (stock > 75) {
      setStockColor(3);
    }
  }, [stock]);

  useEffect(() => {
    if (money < 0) setMoney(0);

    if (money < 25) {
      setMoneyColor(0);
    } else if (money > 25 && money < 50) {
      setMoneyColor(1);
    } else if (money > 50 && money < 75) {
      setMoneyColor(2);
    } else if (money > 75) {
      setMoneyColor(3);
    }
  }, [money]);

  useEffect(() => {
    if (warning > 100) setWarning(100);

    if (warning < 33) {
      setWarningColor(2);
    } else if (warning > 33 && warning < 67) {
      setWarningColor(1);
    } else if (warning > 67) {
      setWarningColor(0);
    } 
  }, [warning]);
  
  let studyBar = study + "%";
  let eatBar = eat + "%";
  let playBar = play + "%";
  let workBar = work + "%";
  let sleepBar = sleep + "%";
  let stockBar = stock + "%";
  let moneyBar = money + "%";
  let warningBar = warning + "%";

  const daySelect = [
    "Sunday",      // 0
    "Monday",      // 1
    "Tuesday",     // 2
    "Wednesday",   // 3
    "Thursday",    // 4
    "Friday",      // 5
    "Saturday"     // 6
  ];   

  function lastday() {
    if (warning == 0) {
      props.end(5);
    } else if (warning > 0 && warning < 25) {
      props.end(4);
    } else if (warning >= 25 && warning < 50) {
      props.end(3);
    } else if (warning >= 50 && warning < 75) {
      props.end(2);
    } else if (warning >= 75) {
      props.end(1);
    }

    setMessage("You did it!");
    setTimeout(() => {
      props.changePage(3);
    }, 3000);
  }

  const [avatarNow, setAvatarNow] = useState(props.avatar);
  const avatar = [
    avatar1,       // 0
    avatar2,       // 1
    avatar1Eat,    // 2
    avatar1Play,   // 3
    avatar1Work,   // 4
    avatar1Sleep,  // 5
    avatar1Study,  // 6
    avatar2Eat,    // 7
    avatar2Play,   // 8
    avatar2Work,   // 9
    avatar2Sleep,  // 10
    avatar2Study]; // 11

  const IFClass = ["EPM101 Class", "CE121 Class", "IF230 Class", "IF260 Class", "IF120 Class", "IF570 Class"];
  const ISClass = ["IF141 Class", "IS103 Class", "IS104 Class", "IS220 Class", "IS240 Class", "IS100 Class"];
  const CEClass = ["EPM101 Class", "CE332 Class", "IF260 Class", "IF120 Class", "IF440 Class", "CE729 Class"];
  const PEClass = ["EPM101 Class", "CE121 Class", "EPM102 Class", "EPM302 Class", "EPM401 Class", "EPM402 Class"];
  const EEClass = ["EPM101 Class", "CE121 Class", "IF230 Class", "EEM311 Class", "CE529 Class", "EEM422 Class"];
  const [class1Done, setClass1Done] = useState(0);
  const [class2Done, setClass2Done] = useState(0);

  function ResetClass() {
    setClass1Done(0);
    setClass2Done(0);
  }

  const timeSelect = [morning, afternoon, evening, night];
  const colorSelect = ["lightyellow", "lightskyblue", "lightsalmon", "darkslateblue"];
  const titleColor = ["black", "black", "black", "white"];
  const greetSelect = ["Morning", "Afternoon", "Evening", "Night"];
  const placeSelect = [home, school, gym, supermarket, classroom, canteen, library];
  const weatherSelect = [sunIcon, cloudIcon, rainIcon];
  const isRaining = ["", "", rain];

  const [time, setTime] = useState(3);
  const [day, setDay] = useState(0);
  const [place, setPlace] = useState(0);
  const [location, setLocation] = useState(0);
  const [weather, setWeather] = useState(0);
  const [temp, setTemp] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [message, setMessage] = useState("");
  
  const newsTitle = [
    "Daftar Game Gratis PS Plus Juni 2022, Ada God of War hingga Naruto to Boruto",
    "Kenapa Tidak Bisa Scan QR Code Whatsapp Web? Ternyata Ini Penyebabnya",
    "Salam Perpisahan Ridwan Kamil untuk Eril, Pimpin Shalat Gaib di Sungai Aare",
    "Soal 8 Orang Warga Jaksel Diduga Terkena Virus Tikus, Kemenkes: Cenderung Cikungunya",
    "AWAS! Virus Hendra 50 Persen Lebih Mematikan Daripada COVID-19, Ini 5 Gejala Virus Hendra",
    "KPK Tetapkan VP Summarecon Agung Tersangka Penyuap Eks Walkot Jogja",
    "Sahroni Respons Alasan BUMN Tak Jadi Sponsor Formula E Jakarta",
    "Penonton Lihat Shakedown Mobil Formula E: Cepat Banget",
    "Masih Teka-teki, Inikah Dalang di Balik Badai PHK Startup?",
    "Reaksi Lebay Ghana Usai Disingkirkan Timnas U-19 Indonesia dari Turnamen Toulon 2022"
  ];
  const newsDesc = [
    "Adapun keempat judul game di PS Plus Juni 2022, antara lain God of War, Naruto to Boruto: Shinobi Striker, Nickelodeon All-Star Brawl, dan Can’t Drive This.",
    "Pengguna WhatsApp bisa menggunakan juga di komputer dengan mengakses web.whatsapp.com. Namun terkadang kenapa tidak bisa scan qr WA web?",
    "Ridwan Kamil dan keluarga menggelar shalat gaib di Sungai Aare sebelum meninggalkan Bern, Swiss.",
    "Kemenkes menerima laporan adanya delapan orang warga Cilandak, Jakarta Selatan, terpapar virus yang diduga penularannya berasal dari tikus.",
    "Walau pemerintah Indonesia telah mengendurkan beberapa peraturan terkait pencegahan COVID-19, tapi sebenarnya pandemi belum selesai.",
    "Selain Wali Kota Yogyakarta periode 2017-2022 Haryadi Suyuti, KPK juga menetapkan tiga tersangka lain kasus dugaan suap pengurusan izin apartemen di Yogyakarta.",
    "Ketua Panitia Pelaksana Formula E Jakarta 2022 Ahmad Sahroni merespons pernyataan staf Khusus Menteri BUMN Arya Sinulingga.",
    "Ratusan penonton sudah ramai menyaksikan sesi shakedown Formula E Jakarta 2022 di Sirkuit Ancol pada Jumat (3/6) sore.",
    "Yang jelas, beberapa startup itu ada yang menjadi masalah utamanya adalah soal pendanaan.",
    "Bagi Ghana, kekalahan dari Timnas U-19 Indonesia di Turnamen Toulon 2022 serasa kiamat sepak bola negerinya."
  ];
  const [newsIndex, setNewsIndex] = useState(0);

  // Clock
  useEffect(() => {
    const interval = setInterval(() => {
      setMinute(minute => minute + 5);
      setEat(eat => eat - 0.6);
      setWork(work => work - 0.4);
      setPlay(play => play - 0.2);
      setSleep(sleep => sleep - 0.1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (minute > 59) {
      setMinute(0);
      setHour(hour => hour + 1);
      Axios.get(weatherURL).then((response) => {
        setRequestWeather(response.data);
      });

      let selectNews = Math.floor(Math.random() * 10);
      setNewsIndex(selectNews);
    }

    if (day == 6 && hour == 23 && minute > 45) {
      lastday();
    }
  }, [minute]);

  useEffect(() => {
    if (hour > 23) {
      setHour(0);
      if (study != 100 && day != 0) setWarning(warning + 17);
      setStudy(0);

      if ((day == 0 || day == 2 || day == 4) && 
          (major == "Computer Science" || major == "Computer Engineering" || major == "Electrical Engineering")) {
        ResetClass();
      } else if ((day == 1 || day == 3 || day == 5) && 
                 (major == "Information System" || major == "Engineering Physics")) {
        ResetClass();
      } 

      setDay(day + 1);
    }

    if (hour == 6) setTime(0);
    else if (hour == 12) setTime(1);
    else if (hour == 16) setTime(2);
    else if (hour == 19) setTime(3);

    if (location == 1 && (hour < 8 || hour > 16)) {
      setMessage("Campus is closed!");
      setPlace(0);
      setLocation(0);
      setTimeout(() => {
          setMessage("");
      }, 2000);
    } else if (location == 2 && (hour < 9 || hour > 21)) {
      setMessage("Gym is closed!");
      setPlace(0);
      setLocation(0);
      setTimeout(() => {
          setMessage("");
      }, 2000);
    } else if (location == 3 && (hour < 10 || hour > 22)) {
      setMessage("Supermarket is closed!");
      setPlace(0);
      setLocation(0);
      setTimeout(() => {
          setMessage("");
      }, 2000);
    } 

    if (hour >= 15 && day != 0) {
      setClass1Done(1);
      setClass2Done(1);
      setInfo1("No Class");
      setInfo2("No Class");
    }
  }, [hour]);

  // Get Request API
  useEffect(() => {
    if (requestWeather) {
      setTemp(requestWeather.main.temp);
      let weatherType = requestWeather.weather[0].description;

      if (weatherType == "clear sky") {
        setWeather(0);
      } else if (weatherType == "few clouds" || weatherType == "scattered clouds") {
        setWeather(1);
      } else if (weatherType == "shower rain" || weatherType == "rain" || weatherType == "thunderstorm") {
        setWeather(2);
      }
    }
  }, [requestWeather]);

  // Subtract Status
  function subEat(amount) {
    setEat(eat - amount);
  }

  function subPlay(amount) {
    setPlay(play - amount);
  }

  function subWork(amount) {
    setWork(work - amount);
  }

  function subSleep(amount) {
    setSleep(sleep - amount);
  }

  function subStock(amount) {
    setStock(stock - amount);
  }

  function subMoney(amount) {
    setMoney(money - amount);
  }

  // Add Status
  function addEat(amount) {
    if (delay != 1) {
      if (stock != 0) {
        setDelay(1);

        if (place == 1) setPlace(5);

        if (props.avatar === 0) {
          setAvatarNow(2);
          setTimeout(() => {
            setEat(eat + amount);
            subWork(amount * 1.3);
            subStock(amount);
            setAvatarNow(0);
            setDelay(0);
            if (place == 1) setPlace(1);
          }, 3000);
        } else {
          setAvatarNow(7);
          setTimeout(() => {
            setEat(eat + amount);
            subWork(amount * 1.3);
            subStock(amount);
            setAvatarNow(1);
            setDelay(0);
            if (place == 1) setPlace(1);
          }, 3000);
        }
      } else {
        setMessage("Food stock is empty!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }
  }

  function addPlay(amount) {
    if (delay != 1) {
      setDelay(1);

      if (props.avatar === 0) {
        setAvatarNow(3);
        setTimeout(() => {
          setPlay(play + amount);
          subEat(amount * 1.3);
          subSleep(amount * 1.4);
          setAvatarNow(0);
          setDelay(0);
        }, 3000);
      } else {
        setAvatarNow(8);
        setTimeout(() => {
          setPlay(play + amount);
          subEat(amount * 1.3);
          subSleep(amount * 1.4);
          setAvatarNow(1);
          setDelay(0);
        }, 3000);
      }
    }
  }

  function addWork(amount) {
    if (delay != 1) {
      setDelay(1);

      if (props.avatar === 0) {
        setAvatarNow(4);
        setTimeout(() => {
          setWork(work + amount);
          subSleep(amount * 1.3);
          subEat(amount * 1.2);
          setAvatarNow(0);
          setDelay(0);
        }, amount * 200);
      } else {
        setAvatarNow(9);
        setTimeout(() => {
          setWork(work + amount);
          subSleep(amount * 1.3);
          subEat(amount * 1.2);
          setAvatarNow(1);
          setDelay(0);
        }, amount * 200);
      }
    }
  }

  function addSleep(amount) {
    if (delay != 1) {
      setDelay(1);

      if (props.avatar === 0) {
        setAvatarNow(5);
        if (day == 6 && hour >= 19 && hour <= 23) lastday();
        setTimeout(() => {
          setSleep(sleep + amount);
          setPlay(play + amount);
          setEat(eat + amount);
          setWork(work + amount);
          setAvatarNow(0);
          setHour(6);
          setMinute(0);
          setDelay(0);
          if (hour >= 19 && hour <= 23) {
            if ((day == 0 || day == 2 || day == 4) && 
                (major == "Computer Science" || major == "Computer Engineering" || major == "Electrical Engineering")) {
              ResetClass();
            } else if ((day == 1 || day == 3 || day == 5) && 
                       (major == "Information System" || major == "Engineering Physics")) {
              ResetClass();
            } 

            setDay(day + 1);
            if (study != 100 && day != 0) setWarning(warning + 17);
          } 
          setStudy(0);
        }, amount * 100);
      } else {
        setAvatarNow(10);
        if (day == 6 && hour >= 19 && hour <= 23) lastday();
        setTimeout(() => {
          setSleep(sleep + amount);
          setPlay(play + amount);
          setEat(eat + amount);
          setWork(work + amount);
          setAvatarNow(1);
          setHour(6);
          setMinute(0);
          setDelay(0);
          if (hour >= 19 && hour <= 23) {
            if ((day == 0 || day == 2 || day == 4) && 
                (major == "Computer Science" || major == "Computer Engineering" || major == "Electrical Engineering")) {
              ResetClass();
            } else if ((day == 1 || day == 3 || day == 5) && 
                       (major == "Information System" || major == "Engineering Physics")) {
              ResetClass();
            } 

            setDay(day + 1);
            if (study != 100 && day != 0) setWarning(warning + 17);
          } 
          setStudy(0);
        }, amount * 100);
      }
    }
  }

  function addStudy(amount, classType) {
    if (delay != 1) {
      setDelay(1);

      if (classType == 1 || classType == 2) {
        setPlace(4);
      }

      if (props.avatar === 0) {
        setAvatarNow(6);
        setTimeout(() => {
          setAvatarNow(0);

          if (classType == 1 || classType == 2) {
            if (classType == 1) setClass1Done(1);
            else if (classType == 2) setClass2Done(1);
            setPlace(1);
          }
          
          setStudy(study + (amount * 10));
          subEat(amount * 2.5);
          subPlay(amount * 2.5);
          subWork(amount * 2.5);
          subSleep(amount * 2.5);
          setHour(hour + amount);
          setDelay(0);
        }, amount * 1500);
      } else {
        setAvatarNow(11);
        setTimeout(() => {
          setAvatarNow(1);

          if (classType == 1 || classType == 2) {
            if (classType == 1) setClass1Done(1);
            else if (classType == 2) setClass2Done(1);
            setPlace(1);
          }
          
          setStudy(study + (amount * 10));
          subEat(amount * 2.5);
          subPlay(amount * 2.5);
          subWork(amount * 2.5);
          subSleep(amount * 2.5);
          setHour(hour + amount);
          setDelay(0);
        }, amount * 1500);
      }
    }
  }

  function addStock(amount) {
    if (delay != 1) {
      if (money == 0) {
        setMessage("You ran out of money!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else {
        setStock(stock + amount);
        subMoney(amount * 1.2);
      }
    }
  }

  // Switch Place
  function placeSwitch(event) {
    setPlace(event.target.value);
    setLocation(event.target.value);
  }

  const prevLocation = usePrevious(location);

  useEffect(() => {
    if (location == 1 && ((hour < 8 || hour > 16) || day == 0)) {
      setMessage("Campus is closed!");
      setPlace(prevLocation);
      setLocation(prevLocation);
      setTimeout(() => {
          setMessage("");
      }, 2000);
    } else if (location == 2 && (hour < 9 || hour > 21)) {
      setMessage("Gym is closed!");
      setPlace(prevLocation);
      setLocation(prevLocation);
      setTimeout(() => {
          setMessage("");
      }, 2000);
    } else if (location == 3 && (hour < 10 || hour > 22)) {
      setMessage("Supermarket is closed!");
      setPlace(prevLocation);
      setLocation(prevLocation);
      setTimeout(() => {
          setMessage("");
      }, 2000);
    } 

    if (location == 1 && ((hour >= 8 && hour <= 16) && day != 0)) {
      subEat(1.2);
      subSleep(1.4);
    } else if (location == 2 && (hour >= 9 && hour <= 21)) {
      subEat(1.4);
      subSleep(1.6);
    } else if (location == 3 && (hour >= 10 && hour <= 22)) {
      subEat(1.3);
      subSleep(1.5);
    } else if (location == 1) {
      subEat(1.1);
      subSleep(1.3);
    }
  }, [location]);

  // Action Properties
  function sleepProps() {
    if (hour >= 6 && hour < 19) {
      setMessage("You can't sleep right now!");
      setTimeout(() => {
          setMessage("");
      }, 2000);
    } else if (hour >= 19 && hour <= 21) {
      addSleep(40);
    } else if (hour >= 22 && hour <= 23) {
      addSleep(30);
    } else if (hour >= 0 && hour <= 3) {
      addSleep(20);
    } else if (hour >= 4 && hour <= 5) {
      addSleep(10);
    }
  }

  function class1Props() {
    if (class1Done == 1) {
      setInfo1("No Class");
    } else {
      if (day == 1) {
        if (major == "Computer Science") {
          setInfo1(IFClass[0]);
        } else if (major == "Computer Engineering") {
          setInfo1(CEClass[0]);
        } else if (major == "Electrical Engineering") {
          setInfo1(EEClass[0]);
        }
      } else if (day == 2) {
        if (major == "Information System") {
          setInfo1(ISClass[0]);
        } else if (major == "Engineering Physics") {
          setInfo1(PEClass[0]);
        } 
      } else if (day == 3) {
        if (props.major == "Computer Science") {
          setInfo1(IFClass[2]);
        } else if (major == "Computer Engineering") {
          setInfo1(CEClass[2]);
        } else if (major == "Electrical Engineering") {
          setInfo1(EEClass[2]);
        }
      } else if (day == 4) {
        if (major == "Information System") {
          setInfo1(ISClass[2]);
        } else if (major == "Engineering Physics") {
          setInfo1(PEClass[2]);
        } 
      } else if (day == 5) {
        if (major == "Computer Science") {
          setInfo1(IFClass[4]);
        } else if (major == "Computer Engineering") {
          setInfo1(CEClass[4]);
        } else if (major == "Electrical Engineering") {
          setInfo1(EEClass[4]);
        }
      } else if (day == 6) {
        if (major == "Information System") {
          setInfo1(ISClass[4]);
        } else if (major == "Engineering Physics") {
          setInfo1(PEClass[4]);
        } 
      }
    }
  }

  function class2Props() {
    if (class2Done == 1) {
      setInfo2("No Class");
    } else {
      if (day == 1) {
        if (major == "Computer Science") {
          setInfo2(IFClass[1]);
        } else if (major == "Computer Engineering") {
          setInfo2(CEClass[1]);
        } else if (major == "Electrical Engineering") {
          setInfo2(EEClass[1]);
        }
      } else if (day == 2) {
        if (major == "Information System") {
          setInfo2(ISClass[1]);
        } else if (major == "Engineering Physics") {
          setInfo2(PEClass[1]);
        } 
      } else if (day == 3) {
        if (major == "Computer Science") {
          setInfo2(IFClass[3]);
        } else if (major == "Computer Engineering") {
          setInfo2(CEClass[3]);
        } else if (major == "Electrical Engineering") {
          setInfo2(EEClass[3]);
        }
      } else if (day == 4) {
        if (major == "Information System") {
          setInfo2(ISClass[3]);
        } else if (major == "Engineering Physics") {
          setInfo2(PEClass[3]);
        } 
      } else if (day == 5) {
        if (major == "Computer Science") {
          setInfo2(IFClass[5]);
        } else if (major == "Computer Engineering") {
          setInfo2(CEClass[5]);
        } else if (major == "Electrical Engineering") {
          setInfo2(EEClass[5]);
        }
      } else if (day == 6) {
        if (major == "Information System") {
          setInfo2(ISClass[5]);
        } else if (major == "Engineering Physics") {
          setInfo2(PEClass[5]);
        } 
      }
    }
  }

  function class1Action() {
    if (delay != 1) {
      if (class1Done != 1) {
        if (day == 1) {
          if (major == "Computer Science") {
            addStudy(4, 1);
          } else if (major == "Computer Engineering") {
            addStudy(4, 1);
          } else if (major == "Electrical Engineering") {
            addStudy(4, 1);
          }
        } else if (day == 2) {
          if (major == "Information System") {
            addStudy(3, 1);
          } else if (major == "Engineering Physics") {
            addStudy(4, 1);
          } 
        } else if (day == 3) {
          if (props.major == "Computer Science") {
            addStudy(3, 1);
          } else if (major == "Computer Engineering") {
            addStudy(3, 1);
          } else if (major == "Electrical Engineering") {
            addStudy(2, 1);
          }
        } else if (day == 4) {
          if (major == "Information System") {
            addStudy(2, 1);
          } else if (major == "Engineering Physics") {
            addStudy(2, 1);
          } 
        } else if (day == 5) {
          if (major == "Computer Science") {
            addStudy(3, 1);
          } else if (major == "Computer Engineering") {
            addStudy(3, 1);
          } else if (major == "Electrical Engineering") {
            addStudy(3, 1);
          }
        } else if (day == 6) {
          if (major == "Information System") {
            addStudy(2, 1);
          } else if (major == "Engineering Physics") {
            addStudy(3, 1);
          } 
        }
      } else {
        setMessage("Class is not avaiable!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }
  }

  function class2Action() {
    if (delay != 1) {
      if (class2Done != 1) {
        if (day == 1) {
          if (major == "Computer Science") {
            addStudy(2, 2);
          } else if (major == "Computer Engineering") {
            addStudy(3, 2);
          } else if (major == "Electrical Engineering") {
            addStudy(2, 2);
          }
        } else if (day == 2) {
          if (major == "Information System") {
            addStudy(2, 2);
          } else if (major == "Engineering Physics") {
            addStudy(2, 2);
          } 
        } else if (day == 3) {
          if (props.major == "Computer Science") {
            addStudy(2, 2);
          } else if (major == "Computer Engineering") {
            addStudy(3, 2);
          } else if (major == "Electrical Engineering") {
            addStudy(2, 2);
          }
        } else if (day == 4) {
          if (major == "Information System") {
            addStudy(3, 2);
          } else if (major == "Engineering Physics") {
            addStudy(4, 2);
          } 
        } else if (day == 5) {
          if (major == "Computer Science") {
            addStudy(2, 2);
          } else if (major == "Computer Engineering") {
            addStudy(3, 2);
          } else if (major == "Electrical Engineering") {
            addStudy(2, 2);
          }
        } else if (day == 6) {
          if (major == "Information System") {
            addStudy(3, 2);
          } else if (major == "Engineering Physics") {
            addStudy(3, 2);
          } 
        }
      } else {
        setMessage("Class is not avaiable!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }
  }

  // Set Button
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const [info4, setInfo4] = useState("");

  useEffect(() => {
    if (location == 0) {
      setInfo1("Eat");
      setInfo2("Play");
      setInfo3("Sleep");
      setInfo4("Study");
    } else if (location == 1) {
      class1Props();
      class2Props();
      setInfo3("Eat");
      setInfo4("Rest");
    } else if (location == 2) {
      setInfo1("Work 1");
      setInfo2("Work 2");
      setInfo3("Work 3");
      setInfo4("Work 4");
    } else if (location == 3) {
      setInfo1("Buy Meal");
      setInfo2("Buy Vegetable");
      setInfo3("Buy Fruit");
      setInfo4("Buy Snack");
    }
  }, [place]);

  function action1() {
    if (location == 0) {
      addEat(5);
    } else if (location == 1) {
      class1Action();
    } else if (location == 2) {
      addWork(5);
    } else if (location == 3) {
      addStock(5);
    }
  }

  function action2() {
    if (location == 0) {
      addPlay(5);
    } else if (location == 1) {
      class2Action();
    } else if (location == 2) {
      addWork(10);
    } else if (location == 3) {
      addStock(3);
    }
  }

  function action3() {
    if (location == 0) {
      sleepProps();
    } else if (location == 1) {
      addEat(5);
    } else if (location == 2) {
      addWork(15);
    } else if (location == 3) {
      addStock(2);
    }
  }

  function action4() {
    if (location == 0) {
      addStudy(1, 0);
    } else if (location == 1) {
      if (delay != 1) {
        setDelay(1);
        setPlace(6);
        setTimeout(() => {
          setPlay(play + 5);
          setSleep(sleep + 2);
          setPlace(1);
          setDelay(0);
        }, 3000);
      }
    } else if (location == 2) {
      addWork(20);
    } else if (location == 3) {
      addStock(1);
    }
  }

  // Components
  function Status(props) {
    return (
      <div className="progress-container">
        <img 
        src={props.icon} 
        alt="icon" 
        className="me-3"
        style={{width: "30px"}} />
        <div 
          className="progress ms-1 mt-1" 
          style={{width: "100px", height: "20px"}}>
          <div 
            className={props.color}
            role="progressbar" 
            style={{width: props.bar}}
            aria-valuenow={props.value} 
            aria-valuemin="0" 
            aria-valuemax="100">
          </div>
        </div>
      </div>
    );
  }

  function ActButton(props) {
    return (
      <button
        type="button" 
        className="btn btn-outline-primary my-2 act-button"
        onClick={() => {
          props.act();
        }} >
        {props.info}
      </button>
    );
  }

  function WeatherClock() {
    return (
      <div
        className="time-content"
        style={{
          backgroundImage: `url(${isRaining[weather]})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
          backgroundSize: 'auto'
        }}>
        <h3>{daySelect[day]}</h3>
        <h1 style={{fontSize: "48pt"}}>
          {hour.toString().padStart(2, 0)}:{minute.toString().padStart(2, 0)}
        </h1>
        <div className="temp-container">
          <img 
            src={weatherSelect[weather]} 
            alt="logo" 
            className="me-2"
            style={{width: "30px", 
                    transition: "all .5s ease",
                    WebkitTransition: "all .5s ease",
                    MozTransition: "all .5s ease"}} />
          <h3 className="pt-2">{temp}°C</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="game-canvas" style={{backgroundColor: colorSelect[time], backgroundSize: "cover",   transition: "all .5s ease",
  WebkitTransition: "all .5s ease",
  MozTransition: "all .5s ease"}}>
      <div className="container-fluid">
        <img 
          src={logo} 
          alt="logo" 
          className="mt-3" 
          style={{width: "30px"}} />
			  <h6 style={{color: titleColor[time]}}>Weekly Dose of College</h6>
			  <hr />

        <div className="d-flex row mb-3">
          <div className="col-xl-4">
            <div className="place-picker">
              <h5>Place Now</h5>
              <select 
                id="select-major" 
                class="form-select mb-3"
                onChange={placeSwitch}
                value={location} >
                <option selected value="0">Home</option>
                <option value="1">Campus</option>
                <option value="2">Gym</option>
                <option value="3">Supermarket</option>
              </select>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="status-bar">
              <div className="d-flex row">
                <div className="col-6">
                  <Status icon={eatIcon} bar={eatBar} value={eat} color={barColor[eatColor]} />
                </div>

                <div className="col-6">
                  <Status icon={stockIcon} bar={stockBar} value={stock} color={barColor[stockColor]} />
                </div>
              </div>

              <div className="d-flex row">
                <div className="col-6">
                  <Status icon={playIcon} bar={playBar} value={play} color={barColor[playColor]} />
                </div>

                <div className="col-6">
                  <Status icon={workIcon} bar={workBar} value={work} color={barColor[workColor]} />
                </div>
              </div>

              <div className="d-flex row">
                <div className="col-6">
                  <Status icon={sleepIcon} bar={sleepBar} value={sleep} color={barColor[sleepColor]} />
                </div>

                <div className="col-6">
                  <Status icon={studyIcon} bar={studyBar} value={study} color={barColor[2]} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="button-container">
              <div className="d-flex row">
                <div className="col-6">
                  <ActButton act={action1} info={info1} />
                </div>

                <div className="col-6">
                  <ActButton act={action2} info={info2} />
                </div>
              </div>

              <div className="d-flex row">
                <div className="col-6">
                  <ActButton act={action3} info={info3} />
                </div>

                <div className="col-6">
                  <ActButton act={action4} info={info4} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex row mb-3">
          <div className="col-xl-4">
            <div className="news-container">
              <div className="news-title">
                <h3>News</h3>
              </div>
              <div className="p-1">
                <h5>{newsTitle[newsIndex]}</h5>
                <p>{newsDesc[newsIndex]}</p>
              </div>
            </div>
          </div>

          <div 
            className="col-xl-4" 
            style={{
              backgroundImage: `url(${placeSelect[place]})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>
            <img 
              src={avatar[avatarNow]} 
              className="py-3"
              style={{width: "200px"}} />
          </div>

          <div className="col-xl-4">
            <div 
              className="time-container"
              style={{
                backgroundImage: `url(${timeSelect[time]})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}>
              <WeatherClock />
            </div>
          </div>
        </div>

        <div className="d-flex row pb-3">
          <div className="col-xl-4">
            <div className="player-detail">
              <h6>Good {greetSelect[time]}, {props.name}!</h6>
              <p>Major: {major}</p>
              <div className="d-flex row">
                <div className="col-6">
                  <Status icon={moneyIcon} bar={moneyBar} value={money} color={barColor[moneyColor]} />
                </div>

                <div className="col-6">
                  <Status icon={warningIcon} bar={warningBar} value={warning} color={barColor[warningColor]} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="message-container">
              <h4>{message}</h4>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="back-container">
              <button 
                type="submit" 
                className="act-button btn btn-outline-primary my-4 p-2"
                onClick={() => {
                  props.changePage(0);
                }} >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}