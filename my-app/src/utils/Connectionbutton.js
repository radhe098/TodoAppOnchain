import { ConnectKitButton } from "connectkit";
import styled from "styled-components";
const StyledButton = styled.button`
  cursor: pointer;
  position: absolute; /* Change to absolute for positioning */
  top: 16px; /* Distance from the top */
  right: 16px; /* Distance from the right */
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 4px 24px -6px #1a88f8;

  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #1a88f8;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #1a88f8;
  }
`;

export const ConnectionButton = ({ style }) => {
  return (
    <>
      {/* <div className="relative z-10 flex items-center justify-center min-h-screen"> */}
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton onClick={show}>
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
    {/* </div> */}
    </>);
};
