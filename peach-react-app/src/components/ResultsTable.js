import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class ResultsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.events({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      <ol class="ResultsCss">
      {this.state.events.map((event) => <li> Дата игры: {event.date}, Место проведения:{event.location} || 
      <b>{event.name1}</b> {event.score1} - {event.score2}  <b>{event.name2}</b></li>)}
      </ol>
    </div>
  }
}
export default ResultsTable;