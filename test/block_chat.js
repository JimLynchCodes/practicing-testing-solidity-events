const truffleAssert = require('truffle-assertions')
const BlockChat = artifacts.require('BlockChat')

contract('BlockChat', function (accounts) {
  it('should assert true', async function () {
    await BlockChat.deployed()
    return assert.isTrue(true)
  })

  it('should broadcast messages', async () => {
    // Arrange
    const contract = await BlockChat.deployed()

    const mockMessage = 'Hello there, everybody! 👋'
    // Act
    const result = await contract.saySomething(mockMessage, {
      from: accounts[0],
    })

    // Assert
    const expectedResponseToMessage = 'thank you for that beautiful message.'

    // console.log(result)
    // console.log({ result })

    // expect(result).to.equal(expectedResponseToMessage)

    // expect(result.receipt.logs[0].args.message).to.equal(mockMessage)
    // expect(result.receipt.logs[0].args.messageCount).to.equal(1)


    console.log(JSON.stringify(result))

    truffleAssert.eventEmitted(result, 'MessageSpoken')

    truffleAssert.eventEmitted(result, 'MessageSpoken', (returnValues) => {

      console.log(returnValues)
      console.log({ returnValues })

      return (
        returnValues.message === mockMessage && returnValues.messageCount === 1
      )
    })
  })
})
