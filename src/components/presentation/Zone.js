import React, {Component} from 'react'
import styles from './styles'

class Zone extends Component {

   onSelectTitle(event) {
      event.preventDefault()
      console.log('onSelectTitle: ' + this.props.index)
      this.props.select(this.props.index)
   }

    render() {
        const zoneStyle = styles.zone
        const zipCode = this.props.zone.zipCodes[0]
        const title = (this.props.isSelected)
            ? <a style={zoneStyle.title} href="#">{this.props.zone.name}</a>
            : <a href="#">{this.props.zone.name}</a>

        return (
            <div style={zoneStyle.container}>
                <h2 onClick={this.onSelectTitle.bind(this)} style={zoneStyle.header}>
                    {title}
                </h2>
                <span className="detail">{zipCode}</span><br/>
                <span className="detail">{this.props.zone.numComments}</span>
            </div>
        )
    }
}

export default Zone
