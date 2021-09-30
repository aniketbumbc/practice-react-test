import { screen, render, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Magic from '../Magic';

describe('Magic', () => {
  it('Should contain correct heading', () => {
    render(<Magic />);

    const headingEle = screen.getByRole('heading', { level: 3 });
    const headingTxt = screen.getByRole('heading', {
      name: /This is interview magic/i,
    });

    expect(headingEle).toBeInTheDocument();
    expect(headingTxt).toBeInTheDocument();
  });

  it('Should have correct label text for character enter', () => {
    render(<Magic />);

    const labelEle = screen.getByLabelText(/Enter/i);

    expect(labelEle).toBeInTheDocument();
  });

  it('Should have input element for enter text', () => {
    render(<Magic />);

    const inputEle = screen.getByPlaceholderText(/Enter string/i);

    expect(inputEle).toBeInTheDocument();
  });

  it('Should have correct input value while enter', () => {
    render(<Magic />);

    const inputEle = screen.getByPlaceholderText(/Enter string/i);

    fireEvent.change(inputEle, { target: { value: 'level' } });

    expect(inputEle.value).toBe('level');
  });

  it('Should not incoorect text in the document', () => {
    render(<Magic />);

    const dummyElem = screen.queryByText(/Hello/i);

    expect(dummyElem).not.toBeInTheDocument();
  });

  it('Should display button on the document', () => {
    render(<Magic />);

    const btnElem = screen.getByRole('button', { name: 'Palindrome' });

    expect(btnElem).toBeInTheDocument();
  });

  it('Should display expected output correctly on h4 heading', () => {
    render(<Magic />);

    const h4Elem = screen.getByRole('heading', { level: 4 });

    expect(h4Elem).toBeInTheDocument();
  });

  it('Should display palindrom on button click if it is palindrom', () => {
    render(<Magic />);

    const inputEle = screen.getByPlaceholderText(/Enter string/i);

    fireEvent.change(inputEle, { target: { value: 'level' } });

    expect(inputEle.value).toBe('level');

    const btnElem = screen.getByRole('button', { name: /Palindrome/ });

    userEvent.click(btnElem);

    const h4Elem = screen.getByText('Yes... level', { exact: true });

    expect(h4Elem).toHaveTextContent('Yes... level');
  });

  it('Should display no palindrom on button click if it is palindrom', () => {
    render(<Magic />);

    const inputEle = screen.getByPlaceholderText(/Enter string/i);

    fireEvent.change(inputEle, { target: { value: 'bunny' } });

    expect(inputEle.value).toBe('bunny');

    const btnElem = screen.getByRole('button', { name: /Palindrome/ });

    userEvent.click(btnElem);

    const h4Elem = screen.getByText('No ', { exact: false });

    expect(h4Elem).toHaveTextContent('No Palindrome');
  });

  it('Should display button list button element on UI', () => {
    render(<Magic />);

    const listBtnEle = screen.getByRole('button', { name: 'List' });

    expect(listBtnEle).toBeInTheDocument();
  });

  it('Should display list on button click', () => {
    render(<Magic />);
    const listBtnEle = screen.getByRole('button', { name: 'List' });

    userEvent.click(listBtnEle);

    const items = screen.getAllByRole('listitem');

    expect(items.length).toBe(4);

    const textContent = items.map((ele) => ele.textContent);

    console.log(textContent);

    expect(textContent.length).toBe(4);
    expect(textContent).toEqual(['Mango', 'Banana', 'Apple', 'Berry ']);
  });
});
