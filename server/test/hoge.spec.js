/**
 * Created by tottokotkd on 23/12/2016.
 */

import assert from 'power-assert'

describe('test of ci', () => {
   it('success', () => {
       const str = 'test';
       assert(str === 'test');
   }) ;
    it('failure', () => {
        const str = 'test';
        assert(str != 'test');
    }) ;
});
