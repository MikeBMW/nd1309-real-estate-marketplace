const Verifier = artifacts.require('Verifier');

let accounts;
let owner;

let instance;

const proof = {
    "proof": {
        "a": ["0x271c8d0cd7427736756271e06699e4afae9134747d9c166de8c31fb6da840a56", "0x1e0086182fa81374389aedd2b1445c57404f1264e879d070855dc51401c7ead7"],
        "b": [["0x1301213b54c905ee820080693a268b2db073b6e73512f62459979fc4fe82726d", "0x2998bedadb0e78bc2a5104d100cd63a0e77e063bbafab594454b16fb9d1a00fd"], ["0x03fe8ed4ff1d336208088e9e5d88b83032be45d6de87e6f49a7bfab1a141d3e0", "0x24165c1801153ef531a49b5e3bc46f29a59fedb6db85d41b4a65643dc5d4f3a4"]],
        "c": ["0x084eb56d3880e26317f7716f8abc2a24e538bb3f1dfaa0d57f84ca93d5285e67", "0x2ac0f617761e190ea833414a4e7e3e51e6987ff2b9390722c7968cb73fb2be8b"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
};

contract('Verifier', acc => {
    accounts = acc;
    owner = accounts[0];
});


before(async function () {
    instance = await Verifier.new({from: owner});
});


it('should pass verification with correct proof', async function () {

    let success = false;

    try {
        await instance.verifyTx(
            proof.proof.a,
            proof.proof.b,
            proof.proof.c,
            proof.inputs
        );
        success = true;
    } catch (err) {
        success = false;
    }

    assert.equal(success, true, "New verification successful");
});


it('should fail verification with incorrect proof', async function () {

    let failed = false;

    try {

        const tx = await instance.verifyTx(
            proof.proof.a,
            proof.proof.b,
            proof.proof.b,
            ["abc", "def"]
        );

        const VerifiedEvent = tx.logs.find((log) => log.event === 'Verified');
        const verifiedEventEmitted = !!(VerifiedEvent);
        failed = !verifiedEventEmitted;

    } catch (err) {
        failed = true;
    }

    assert.equal(failed, true, "Verification should fail for incorrect proof");
});