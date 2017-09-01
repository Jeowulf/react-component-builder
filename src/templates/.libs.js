import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';
import color from 'color';
import numeral from 'numeral';
import moment from 'moment';