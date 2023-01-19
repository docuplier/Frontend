import { DOCUMENT_TABS } from "constants/appConstants";
import { paths } from "Routes";

export const getPathByName = (name: string, step: number) => {
  switch (name) {
    case DOCUMENT_TABS[0].name:
      if (step === 0) return paths.CERTIFICATES;
      if (step === 1) return paths.CERTIFICATES_NAME;
      if (step === 2) return paths.CERTIFICATES_UPLOAD_LIST;
      if (step === 3) return paths.CERTIFICATES_PREVIEW;
      if (step === 4) return paths.CERTIFICATES_SUCCESS;
      if (step === 5) return paths.CERTIFICATES_NAME;
    case DOCUMENT_TABS[1].name:
      if (step === 0) return paths.BADGES;
      if (step === 1) return paths.BADGES_NAME;
      if (step === 2) return paths.BADGES_UPLOAD_LIST;
      if (step === 3) return paths.BADGES_PREVIEW;
      if (step === 4) return paths.BADGES_SUCCESS;
      if (step === 5) return paths.BADGES_NAME;
    case DOCUMENT_TABS[2].name:
      if (step === 0) return paths.TAGS;
      if (step === 1) return paths.TAGS_NAME;
      if (step === 2) return paths.TAGS_UPLOAD_LIST;
      if (step === 3) return paths.TAGS_PREVIEW;
      if (step === 4) return paths.TAGS_SUCCESS;
      if (step === 5) return paths.TAGS_NAME;
    case DOCUMENT_TABS[3].name:
      if (step === 0) return paths.INVITATIONS;
      if (step === 1) return paths.INVITATIONS_NAME;
      if (step === 2) return paths.INVITATIONS_UPLOAD_LIST;
      if (step === 3) return paths.INVITATIONS_PREVIEW;
      if (step === 4) return paths.INVITATIONS_SUCCESS;
      if (step === 5) return paths.INVITATIONS_NAME;
    default:
      return "";
  }
};
