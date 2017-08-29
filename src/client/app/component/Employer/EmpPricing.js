import React, {Component} from 'react';
import styles from './EmpPricing.scss';

import FontAwesome from 'react-fontawesome';

class EmpPricing extends Component {
	render() {
		return(
			<section className='pricing'>
				<div className={ styles['contact-for-more'] }>
					<h3>Pricing</h3>
					<div>Contact Us for Details</div>
					<form action='/api/contact' method="post">
						<input type="hidden" name="inquiry" value="pricing" />
						<input type="text" name="email" placeholder="youremail@mail.com" />
					  	<input type="submit" value="Sumbit" />
					</form>
				</div>
			</section>

		)
	}
}

export default EmpPricing;