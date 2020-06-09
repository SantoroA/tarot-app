import React, { Component } from "react";
import { choice } from "./helpers";
import TarotCard from "./TarotCard";
import { render } from "@testing-library/react";

class Dealer extends Component {
  constructor(props) {
    super();
    this.state = {
      currCard: null,
      cards: [
        { id: 0, name: "The Fool" },
        { id: 1, name: "The Magician" },
        { id: 2, name: "High Priestess" },
        { id: 3, name: "The Empress" },
        { id: 4, name: "The Emperor" },
        { id: 5, name: "The Hierophant" },
        { id: 6, name: "The Lovers" },
        { id: 7, name: "The Chariot" },
        { id: 8, name: "Strength" },
        { id: 9, name: "The Hermit" },
        { id: 10, name: "The Wheel of Fortune" },
        { id: 11, name: "Justice" },
        { id: 12, name: "The Hanged Man" },
        { id: 13, name: "Death" },
        { id: 14, name: "Temperance" },
        { id: 15, name: "The Devil" },
        { id: 16, name: "The Tower" },
        { id: 17, name: "The Star" },
        { id: 18, name: "The Moon" },
        { id: 19, name: "The Sun" },
        { id: 20, name: "Judgement" },
        { id: 21, name: "The World" },
        { id: 22, name: "Ace of Wands" },
        { id: 23, name: "Two of Wands" },
        { id: 24, name: "Three of Wands" },
        { id: 25, name: "Four of Wands" },
        { id: 26, name: "Five of Wands" },
        { id: 27, name: "Six of Wands" },
        { id: 28, name: "Seven of Wands" },
        { id: 29, name: "Eight of Wands" },
        { id: 30, name: "Nine of Wands" },
        { id: 31, name: "Ten of Wands" },
        { id: 32, name: "Page of Wands" },
        { id: 33, name: "Knight of Wands" },
        { id: 34, name: "Queen of Wands" },
        { id: 35, name: "King of Wands" },
        { id: 36, name: "Ace of Cups" },
        { id: 37, name: "Two of Cups" },
        { id: 38, name: "Three of Cups" },
        { id: 39, name: "Four of Cups" },
        { id: 40, name: "Five of Cups" },
        { id: 41, name: "Six of Cups" },
        { id: 42, name: "Seven of Cups" },
        { id: 43, name: "Eight of Cups" },
        { id: 44, name: "Nine of Cups" },
        { id: 45, name: "Ten of Cups" },
        { id: 46, name: "Page of Cups" },
        { id: 47, name: "Knight of Cups" },
        { id: 48, name: "Queen of Cups" },
        { id: 49, name: "King of Cups" },
        { id: 50, name: "Ace of Swords" },
        { id: 51, name: "Two of Swords" },
        { id: 52, name: "Three of Swords" },
        { id: 53, name: "Four of Swords" },
        { id: 54, name: "Five of Swords" },
        { id: 55, name: "Six of Swords" },
        { id: 56, name: "Seven of Swords" },
        { id: 57, name: "Eight of Swords" },
        { id: 58, name: "Nine of Swords" },
        { id: 59, name: "Ten of Swords" },
        { id: 60, name: "Page of Swords" },
        { id: 61, name: "Knight of Swords" },
        { id: 62, name: "Queen of Swords" },
        { id: 63, name: "King of Swords" },
        { id: 64, name: "Ace of Pentacles" },
        { id: 65, name: "Two of Pentacles" },
        { id: 66, name: "Three of Pentacles" },
        { id: 67, name: "Four of Pentacles" },
        { id: 68, name: "Five of Pentacles" },
        { id: 69, name: "Six of Pentacles" },
        { id: 70, name: "Seven of Pentacles" },
        { id: 71, name: "Eight of Pentacles" },
        { id: 72, name: "Nine of Pentacles" },
        { id: 73, name: "Ten of Pentacles" },
        { id: 74, name: "Page of Pentacles" },
        { id: 75, name: "Knight of Pentacles" },
        { id: 76, name: "Queen of Pentacles" },
        { id: 77, name: "King of Pentacles" },
      ],
      dealtCards: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  dealCard() {
    const newCard = choice(this.state.cards);
    this.setState((st) => {
      return {
        currCard: newCard,
        cards: st.cards.filter((x) => x != newCard),
        dealtCards: [...st.dealtCards, newCard],
      };
    });
    console.log(this.state.cards);
    console.log(this.state.dealtCards);
  }

  handleClick(e) {
    e.preventDefault();
    this.dealCard();
  }

  render() {
    return (
      <div className="Dealer container">
        <button
          type="button"
          className="btn btn-dark mb-2"
          onClick={this.handleClick}
        >
          Deal
        </button>
        <div className="row">
          {this.state.currCard &&
            this.state.dealtCards.map((i) => <TarotCard card={i} />)}
        </div>
      </div>
    );
  }
}

export default Dealer;
