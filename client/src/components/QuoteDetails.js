import './QuoteDetails.scss';

const Line = ({ heading, value }) => {
  return (
    <div className="line">
      <div className="key">{heading}</div>
      <div className="value">{value}</div>
    </div>
  )
};

function QuoteDetails({ subtotal, tax, taxPercentage, total }) {
  return (
    <div className="quote-details">
      <Line heading="Subtotal" value={`Rs.${subtotal}`} />
      <Line heading={`Tax (${taxPercentage}% GST)`} value={`Rs.${tax}`} />
      <Line heading="Total" value={`Rs.${total}`} />
    </div>
  );
}

export default QuoteDetails;
