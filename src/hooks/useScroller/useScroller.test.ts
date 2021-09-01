import useScroller from './useScroller'

test('Should scrollTo a position.', () => {
  // Arrange
  const spy = jest.spyOn(window, 'scrollTo').mockImplementation()

  const scroll = useScroller({ x: 20, y: 0 })
  if (!scroll) {
    throw Error('Invalid Window object')
  }

  // Act
  scroll()

  // Assert
  expect(spy).toBeCalledWith({
    left: 20,
    top: 0,
    behavior: 'auto',
  })

  spy.mockRestore()
})
