// Class 선언

class SampleClass {}

class Game {
  name: string;
  country: string;
  download: number;

  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  introduction() {
    return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임`;
  }
}

const starcraft = new Game('Star Craft', 'USA', 100000);

const returnValue = starcraft.introduction(); // string type

starcraft.changeGame(); // error
