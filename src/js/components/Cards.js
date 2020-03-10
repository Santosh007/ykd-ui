import React from "react";
import Card from "./Card";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          key: 1,
          url: "https://picsum.photos/id/1/500/300",
          alt: "something",
          name: "First Plan",
          desc: "First Arch Plan"
        },
        {
          key: 2,
          url: "https://picsum.photos/id/10/500/300",
          alt: "something",
          name: "First Plan",
          desc: "First Arch Plan"
        },
        {
          key: 3,
          url: "https://picsum.photos/id/100/500/300",
          alt: "something",
          name: "First Plan",
          desc: "First Arch Plan"
        },
        {
          key: 4,
          url: "https://picsum.photos/id/200/500/300",
          alt: "home",
          name: "Completed Project",
          desc: "Latest completed project"
        }
      ]
    };
  }

  render() {
    return (
      <section className="cards">
        {this.state.plans.map(plan => (
          <Card key={plan.key} plan={plan} />
        ))}
      </section>
    );
  }
}
