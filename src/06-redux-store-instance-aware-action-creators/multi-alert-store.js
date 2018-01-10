import makeMultiInstanceStore from '../multi-instance/make-multi-instance-store';
import AlertStore from './alert-store';

export default makeMultiInstanceStore(AlertStore, 'ReduxStoreMultiInstanceAware');
