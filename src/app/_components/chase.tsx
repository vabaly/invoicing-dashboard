'use client';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import i18n from '~/i18n';
import { FakeEmail } from './email';
import { type InvoiceProps } from '~/types';
import { FOOTER_HEIGHT } from '~/constants';

export function Chase(props: InvoiceProps) {
  const [isShowFakeEmail, setIsShowFakeEmail] = useState(false);

  const hideFakeEmail = () => setIsShowFakeEmail(false);
  const showFakeEmail = () => setIsShowFakeEmail(true);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 flex items-center justify-end border-t bg-white px-4"
        style={{ height: FOOTER_HEIGHT }}
      >
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={showFakeEmail}
        >
          {i18n.t('chase')}
        </Button>
      </div>

      <Dialog open={isShowFakeEmail}>
        <DialogTitle>{i18n.t('email.title')}</DialogTitle>
        <DialogContent>
          <FakeEmail {...props} />
        </DialogContent>
        <DialogActions className="mx-4 mb-4">
          <Button variant="contained" onClick={hideFakeEmail}>
            {i18n.t('ok')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
