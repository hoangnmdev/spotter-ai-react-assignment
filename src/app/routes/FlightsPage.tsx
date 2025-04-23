import ErrorBoundary from '@pages/errorBoundary/ErrorBoundary';
import FlightsContainer from '@pages/flights/FlightsContainer';

function FlightsPage() {
  return (
    <ErrorBoundary>
      <FlightsContainer />
    </ErrorBoundary>
  );
}

export default FlightsPage;
