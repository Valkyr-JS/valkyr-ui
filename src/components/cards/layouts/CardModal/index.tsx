import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faHeart,
  faStar,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import { DEFAULT } from "@/constants";
import CardTitle from "../Title";
import TopLine from "../TopLine";
import "./CardModal.scss";
import TextUtils from "@/components/stash/utils/text";
import GenderIcon from "@/components/stash/Performers/GenderIcon";

export interface CardModalNavigation {
  next: {
    disabled: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };
  prev: {
    disabled: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };
}
export interface CardModalContentProps {
  /** Optional classes added alongside the `vui-card-modal` component class. */
  classname?: string;

  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** The link to the object page. */
  link: string;

  /** Properties required for navigating in the modal. */
  navigation?: CardModalNavigation;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The currently displayed modal section. */
  section: CardModalSection;

  /** The sections available to the modal */
  sections: CardModalSectionData[];

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;

  /** A component used for displaying the object thumbnail. */
  thumbnail: React.ReactNode;

  /** The title text. */
  title: string;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;

  /** The data components to be displayed on the top line. */
  topLine?: React.ReactNode;
}

export const CardModalContent: React.FC<
  PropsWithChildren<CardModalContentProps>
> = (props) => {
  const intl = useIntl();
  const handleSetDetailsSection = () => props.setSection("details");
  const handleSetPerformersSection = () => props.setSection("performers");
  const handleSetTagsSection = () => props.setSection("tags");
  const componentClass = "vui-card-modal";
  const bodyClass = componentClass + "__body";
  const footerButtonsContainerClass = componentClass + "__footer-buttons";

  return (
    <>
      <Modal.Header>{props.thumbnail}</Modal.Header>
      <Modal.Body>
        <CardTitle id={props.titleID} link={props.link} text={props.title} />
        <TopLine>{props.topLine}</TopLine>
        <div className={bodyClass}>{props.children}</div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          {props.sections.find((s) => s[0] === "details") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetDetailsSection}
              title={intl.formatMessage({ id: "details" })}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </button>
          )}
          {props.sections.find((s) => s[0] === "performers") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetPerformersSection}
              title={intl.formatMessage({ id: "performers" })}
            >
              <FontAwesomeIcon icon={faUser} />
              {(props.pluginConfig.cards__shared__enableCounts ??
              DEFAULT.CARDS.SHARED.ENABLE_FOOTER_BUTTON_COUNTS) ? (
                <span aria-hidden>
                  {props.sections.find((s) => s[0] === "performers")?.[1]}
                </span>
              ) : null}
            </button>
          )}
          {props.sections.find((s) => s[0] === "tags") && (
            <button
              type="button"
              className="minimal btn"
              onClick={handleSetTagsSection}
              title={intl.formatMessage({ id: "tags" })}
            >
              <FontAwesomeIcon icon={faTag} />
              {(props.pluginConfig.cards__shared__enableCounts ??
              DEFAULT.CARDS.SHARED.ENABLE_FOOTER_BUTTON_COUNTS) ? (
                <span aria-hidden>
                  {props.sections.find((s) => s[0] === "tags")?.[1]}
                </span>
              ) : null}
            </button>
          )}
        </div>
        <div className={footerButtonsContainerClass}>
          {props.navigation ? (
            <>
              <button
                className="btn btn-secondary"
                disabled={props.navigation.prev.disabled}
                onClick={props.navigation.prev.onClick}
                type="button"
              >
                {intl.formatMessage({ id: "pagination.previous" })}
              </button>
              <button
                className="btn btn-secondary"
                disabled={props.navigation.next.disabled}
                onClick={props.navigation.next.onClick}
                type="button"
              >
                {intl.formatMessage({ id: "pagination.next" })}
              </button>
            </>
          ) : null}
          <button
            className="btn btn-secondary"
            onClick={props.closeHandler}
            type="button"
          >
            {intl.formatMessage({ id: "actions.close" })}
          </button>
        </div>
      </Modal.Footer>
    </>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Wrapper                                            */
/* ---------------------------------------------------------------------------------------------- */

interface CardModalWrapperProps {
  /** Optional classes added alongside the `vui-card-modal` component class. */
  classname?: string;

  /** Whether the modal is currently rendered. */
  show: boolean;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const CardModalWrapper: React.FC<
  PropsWithChildren<CardModalWrapperProps>
> = (props) => {
  const componentClass = "vui-card-modal";
  const componentClassList = cx(componentClass, props.classname);

  return (
    <Modal
      aria-labelledby={props.titleID}
      className={componentClassList}
      scrollable
      show={props.show}
    >
      {props.children}
    </Modal>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                       Performers section                                       */
/* ---------------------------------------------------------------------------------------------- */

interface CardModalPerformersSectionProps {
  /** An array of Gender enums in the order they should appear. Unlike the dard
   * performer list, Genders not included will NOT be filtered out. Leave
   * undefined to leave genders unfiltered and names in alphabetical order.  */
  genderSortFilter: GenderEnum[] | undefined;

  /** The Stash object that this list refers to. */
  object: GalleryDataFragment | SceneDataFragment;

  /** The list of performers for the object. */
  performers: PerformerDataFragment[];
}

export const CardModalPerformersSection: React.FC<
  CardModalPerformersSectionProps
> = (props) => {
  const intl = useIntl();
  const componentClass = "vui-card-modal";
  const sectionClass = componentClass + "__performer-section";
  const dataWrapperClass = componentClass + "__performer-data-wrapper";
  const imageWrapperClass = componentClass + "__performer-image-wrapper";
  const iconsClass = componentClass + "__performer-icons";

  const disambiguationClass = componentClass + "__performer-disambiguation";

  /* ------------------------------------------- Sorter ------------------------------------------- */

  const genderSortFilter = props.genderSortFilter ?? [];

  const genderSorter = (
    a: PerformerDataFragment,
    b: PerformerDataFragment,
  ): number => {
    const genderA = a.gender ?? "UNKNOWN";
    const genderB = b.gender ?? "UNKNOWN";

    if (genderSortFilter.length) {
      switch (true) {
        // Order by the given gender order
        case genderA !== genderB:
          return (
            genderSortFilter.indexOf(genderA as GenderEnum) -
            genderSortFilter.indexOf(genderB as GenderEnum)
          );

        default:
          return a.name.localeCompare(b.name);
      }
    }
    return a.name.localeCompare(b.name);
  };

  const sortedList = [...props.performers].sort(genderSorter);

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <div className={sectionClass}>
      <ul>
        {sortedList.map((p) => {
          const age = TextUtils.age(p.birthdate, props.object.date);
          return (
            <li key={p.id}>
              {p.image_path && (
                <div className={imageWrapperClass}>
                  <img alt="" src={p.image_path} />
                </div>
              )}
              <div className={dataWrapperClass}>
                {p.disambiguation && (
                  <span className={disambiguationClass}>
                    {p.disambiguation}
                  </span>
                )}
                <h6>{p.name}</h6>
                <div className={iconsClass}>
                  <GenderIcon gender={p.gender ?? null} />
                  {p.country && (
                    <span>
                      <span
                        aria-hidden
                        className={`fi fi-${p.country.toLowerCase()}`}
                      ></span>
                      <span className="sr-only">{p.country}</span>
                    </span>
                  )}
                  {p.favorite && (
                    <span>
                      <FontAwesomeIcon icon={faHeart} />
                      <span className="sr-only">
                        {intl.formatMessage({ id: "performer_favorite" })}
                      </span>
                    </span>
                  )}
                </div>
                {p.birthdate && props.object.date && (
                  <span>
                    {intl.formatMessage({ id: "age_on_date" }, { age })}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                          Tags section                                          */
/* ---------------------------------------------------------------------------------------------- */

interface CardModalTagsSectionProps {
  tags: { id: Tag["id"]; name: Tag["name"] }[];
}

export const CardModalTagsSection: React.FC<CardModalTagsSectionProps> = (
  props,
) => {
  // Simple tag fallback for when plugin API isn't available, e.g. storybook
  const TagLink = window.PluginApi?.components
    ? window.PluginApi?.components.TagLink
    : (props: { tag: { id: string; name: string } }) => (
        <span className="tag-item">{props.tag.name}</span>
      );

  return (
    <div>
      {props.tags.map((t) => {
        return <TagLink tag={t} />;
      })}
    </div>
  );
};
