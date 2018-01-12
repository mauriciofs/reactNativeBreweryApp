import Api from './Api';
import sinon from 'sinon';

const callStub = sinon.stub(Api, 'call').resolves({status: 200, result: true});
test('Call Api without failing', () => {
    return Api.get('http://example.com', {test: true}).then((example) => {
        expect(callStub.callCount).toBe(1);
    });
})