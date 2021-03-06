import { InfoBox } from '@grafana/ui';
import { AlertManagerCortexConfig } from 'app/plugins/datasource/alertmanager/types';
import React, { FC } from 'react';
import { GRAFANA_RULES_SOURCE_NAME } from '../../utils/datasource';
import { GrafanaReceiverForm } from './form/GrafanaReceiverForm';

interface Props {
  receiverName: string;
  config: AlertManagerCortexConfig;
  alertManagerSourceName: string;
}

export const EditReceiverView: FC<Props> = ({ config, receiverName, alertManagerSourceName }) => {
  const receiver = config.alertmanager_config.receivers?.find(({ name }) => name === receiverName);
  if (!receiver) {
    return (
      <InfoBox severity="error" title="Receiver not found">
        Sorry, this receiver does not seem to exit.
      </InfoBox>
    );
  }

  if (alertManagerSourceName === GRAFANA_RULES_SOURCE_NAME) {
    return <GrafanaReceiverForm config={config} alertManagerSourceName={alertManagerSourceName} existing={receiver} />;
  } else {
    return <p>@TODO cloud receiver editing not implemented yet</p>;
  }
};
