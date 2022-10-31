import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      // by the text content
      // name: 'Job Application Form'
      
      // by the heading level
      level: 1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      // by the text content
      // name: 'Section 1'

      // by the heading level
      level: 2
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const nameElementByLabelText = screen.getByLabelText('Name', {
      selector: 'input'
    });
    expect(nameElementByLabelText).toBeInTheDocument();

    // get by label text query works with wrapper labels too!
    const termsElementByLabelText = screen.getByLabelText('I aggree to the terms and conditions');
    expect(termsElementByLabelText).toBeInTheDocument();

    const nameElementByPlaceholderText = screen.getByPlaceholderText('Fullname');
    expect(nameElementByPlaceholderText).toBeInTheDocument();

    const nameElementByDisplayValue = screen.getByDisplayValue('Tayfur');
    expect(nameElementByDisplayValue).toBeInTheDocument();
 
    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument(); 

    // get by text query's usage: spanb, p, div
    const paragraphElement = screen.getByText('All fields are mandatory!');
    expect(paragraphElement).toBeInTheDocument(); 

    const imgElement = screen.getByAltText('Tayfur');
    expect(imgElement).toBeInTheDocument(); 

  });
})