describe('Fill days', () => {
  const hilanUrl = Cypress.env('hilanUrl')
  const user = Cypress.env('user')
  const password = Cypress.env('password')
  const startTime = Cypress.env('startTime')
  const endTime = Cypress.env('endTime')

  function login () {
    cy.visit(hilanUrl + '/login')

    cy.get('#user_nm').type(user)
    cy.get('#password_nm').type(password);
    cy.get('button[type="submit"]').click();
    cy.wait(500);
  }
  function fillAllOpenDays () {
    cy.get('input.ItemCell.form-control').each((item, i) => {
      const itemId = item[0].id
      if (itemId.includes('ManualEntry')) {
        cy.scrollTo(0, item[0].getBoundingClientRect().top);
        item.val(startTime);
        return
      }

      if (itemId.includes('ManualExit')) {
        item.val(endTime);
        cy.wrap(item).focus();
      }
    });

    cy.get('.primary.hbutton2.buttonNormalBody').focus().click()
    cy.iframe('#alertFrame').find('#secondButton').click()
  }

  it('fills all missing reports', () => {
    login()
    cy.visit(hilanUrl + '/Hilannetv2/Attendance/calendarpage.aspx?isOnSelf=true');
    cy.wait(500);

    // fill current day
    fillAllOpenDays()

    cy.get('#ctl00_mp_RefreshErrorsDays').focus().click();

    cy.wait(3000);
    cy.get('body').then($body => {
      // dont fail if there are no error days
      if ($body.find('input.ItemCell.form-control').length === 0) {
        return
      }

      // fill error days
      fillAllOpenDays()
    });
  })

});
