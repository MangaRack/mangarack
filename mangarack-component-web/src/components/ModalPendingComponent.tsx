import * as mio from '../default';

/**
 * Represents a modal pending component.
 */
export class ModalPendingComponent extends mio.StatelessComponent<void> {
  /**
   * Renders the component.
   */
  public render(): JSX.Element {
    return (
      <div>
        <div className="modalContainerTitle">
          <span className="text">Awaiting Operation</span>
        </div>
        <div className="modalContainerBody">
          <div className="pending">
            <i className="fa fa-spin fa-circle-o-notch"></i>
          </div>
        </div>
      </div>
    );
  }
}
