const assert = require('assert');
const src = require('../src/CodeGoesHere');
require('approvals').mocha();

describe('RegressionTest', () => {
    it('test with straight mocha',function()  {
        assert.equal("Text", "Text");

    });

    it('test with ApprovalTests', function() {
        this.verify(new src.CodeGoesHere().sample(),  {reporters: ['diffmerge']});
        // DiffMerge at https://sourcegear.com/diffmerge/
    });
});