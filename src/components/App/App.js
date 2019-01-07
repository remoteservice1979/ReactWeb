import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Sidebar} from 'semantic-ui-react';
import VerticalNavBarContainer from '../../containers/VerticalNavBarContainer';
import HorizontalNavBarContainer from '../../containers/HorizontalNavBarContainer';
import OverviewPageContent from '../OverviewPageContent/OverviewPageContent';
import {getNearbyRandomNumber} from '../../lib/random';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    setInterval(this.updateInputRadiances.bind(this), 4000);
    setInterval(this.updateStoredEnergies.bind(this), 4000);
  }

  /**
   * Begins the process of updating the input radiance value of each panel in the Redux store, with a random value
   * near the current value.
   *
   * Note: If we were using a real-life solar panel system, we might read these values from a web server (e.g. API).
   * However, since we are not using a real-life solar panel system, we are generating these values ourselves here.
   */
  updateInputRadiances() {
    const newInputRadiancesByPanelId = [];
    this.props.panels.forEach((panel) => {
      newInputRadiancesByPanelId[panel.id] = getNearbyRandomNumber(0, 1, panel.inputRadianceKWM2, 0.05);
    });
    this.props.updateInputRadiances(newInputRadiancesByPanelId);
  }

  /**
   * Begins the process of updating the energy stored value of each battery in the Redux store, with a random value
   * near the current value.
   *
   * Note: If we were using a real-life solar panel system, we might read these values from a web server (e.g. API).
   * However, since we are not using a real-life solar panel system, we are generating these values ourselves here.
   */
  updateStoredEnergies() {
    const newStoredEnergiesByBatteryId = [];
    this.props.batteries.forEach((battery) => {
      newStoredEnergiesByBatteryId[battery.id] = getNearbyRandomNumber(0, battery.energyCapacityKWh, battery.storedEnergyKWh, 0.25);
    });
    this.props.updateStoredEnergies(newStoredEnergiesByBatteryId);
  }

  /**
   * Hides the sidebar if the sidebar is visible.
   */
  hideSidebarIfVisible() {
    if (this.props.sidebarVisible === true) {
      this.props.toggleSidebarVisibility();
    }
  }

  render() {
    return (
      <Sidebar.Pushable>
        <VerticalNavBarContainer toggleSidebarVisibility={this.props.toggleSidebarVisibility}/>
        <Sidebar.Pusher onClick={this.hideSidebarIfVisible.bind(this)} dimmed={this.props.sidebarVisible}>
          <HorizontalNavBarContainer/>
          <OverviewPageContent/>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

App.propTypes = {
  batteries: PropTypes.array.isRequired,
  panels: PropTypes.array.isRequired,
  sidebarVisible: PropTypes.bool.isRequired,
  toggleSidebarVisibility: PropTypes.func.isRequired,
  updateInputRadiances: PropTypes.func.isRequired,
  updateStoredEnergies: PropTypes.func.isRequired
};

export default App;
