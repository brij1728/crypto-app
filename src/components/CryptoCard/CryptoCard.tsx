import { Card } from "react-bootstrap";

export interface CryptoIProps {
  id?: number;
  name: string;
  symbol: string;
}

export const CryptoCard: React.FC<CryptoIProps> = ({ id, name, symbol }) => {
  return (
    <>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <p>{symbol}</p>
        </Card.Body>
        <Card.Footer>Add to Wallet</Card.Footer>
      </Card>
    </>
  );
};
